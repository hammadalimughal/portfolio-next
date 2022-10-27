import { useState } from 'react'
import Header from './components/Header'
import Head from 'next/head'
import Image from 'next/image'
import data from './api/portfolio'
import blogsData from './api/blogs'
// import Blog from './components/Blog'
export default function Home() {
  const validateForm = (e) => {
    e.preventDefault();
  }
  const updateBlogModal = (e) => {
    setModalBlogId(Number(e.target.parentElement.dataset.blogid))
  }
  let inputName, inputValue;
  const getFormData = (e) => {
    inputName = e.target.name;
    inputValue = e.target.value;
    setFormData({ ...formData, [inputName]: inputValue })
  }
  const loadMoreBlogs = (e) => {
    if (blogItems < blogsData.length) {
      if (blogItems == blogsData.length - 2 || blogItems > blogsData.length - 2) {
        e.target.style.display = "none"
      }
      setBlogItems(blogItems + 2)
    }
  }
  const loadMorePortfolio = (e) => {
    if (portfolioItems < data.length) {
      if (portfolioItems == data.length - 3 || portfolioItems > data.length - 3) {
        e.target.style.display = "none"
      }
      setPortfolioItems(portfolioItems + 3)
    }
  }
  const [name] = useState("Eva John");
  const [portfolioItems, setPortfolioItems] = useState(6);
  const [blogItems, setBlogItems] = useState(4);
  const [modalBlogId, setModalBlogId] = useState(1);
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', phone: '', message: '' });
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
      <style jsx>{`
        .banner-main{
          background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 100%), url(/banner-img.jpg);
        }
      `}</style>
        <section className="banner-main" id="home">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-12">
                <div className="banner-content">
                  <h1>{name}</h1>
                  <ul className="profession">
                    <li>designer</li>
                    <li data-rotatetxt="developer,designer">developer</li>
                  </ul>
                  <ul className="social-links">
                    <li><a href="https://www.twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.github.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                  <div className="my-pic">
                    <Image alt="my picture" src="/mypic.jpg" layout='fill' objectFit='cover' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-sec" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-12">
                <div className="about-content">
                  <h2 className="sec-title">about <span>me</span></h2>
                  <div className="row information align-items-center">
                    <div className="col-lg-6 col-12">
                      <h3 className="heading-2">personal info</h3>
                      <ul className="personal-info">
                        <li>First Name: <span>Eva</span></li>
                        <li>Last Name: <span>John</span></li>
                        <li>Age: <span>18 years</span></li>
                        <li>Nationality: <span>American</span></li>
                        <li>Freelance: <span>Available</span></li>
                        <li>Address: <span>Los Angeles, USA</span></li>
                        <li>Phone: <a href="tel:+1234567894">+1 234 567 894</a></li>
                        <li>Email: <a href="mailto:mail@yourmail.com">mail@yourmail.com</a></li>
                        <li>Language: <span>English, Spanish</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="row professional-info g-4">
                        <div className="col-sm-6 panel">
                          <div className="info-card h-100">
                            <h4>03</h4>
                            <h6>years of experience</h6>
                          </div>
                        </div>
                        <div className="col-sm-6 panel">
                          <div className="info-card h-100">
                            <h4>70</h4>
                            <h6>completed projects</h6>
                          </div>
                        </div>
                        <div className="col-sm-6 panel">
                          <div className="info-card h-100">
                            <h4>10</h4>
                            <h6>Happy Customers</h6>
                          </div>
                        </div>
                        <div className="col-sm-6 panel">
                          <div className="info-card h-100">
                            <h4>05</h4>
                            <h6>Awards Won</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-sec" id="services">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-12">
                <div className="services-content">
                  <h2 className="sec-title">My <span>Experties</span></h2>
                  <div className="row g-4 services-listing">
                    <div className="col-md-6 col-12 panel">
                      <div className="service-item h-100">
                        <h4>Responsive Web Design</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quasi minima consequatur fugiat atque voluptates at accusantium a culpa illo!</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 panel">
                      <div className="service-item h-100">
                        <h4>PSD to HTML</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quasi minima consequatur fugiat atque voluptates at accusantium a culpa illo!</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 panel">
                      <div className="service-item h-100">
                        <h4>ReactJS / NextJS Website</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quasi minima consequatur fugiat atque voluptates at accusantium a culpa illo!</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 panel">
                      <div className="service-item h-100">
                        <h4>Website Optimization</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quasi minima consequatur fugiat atque voluptates at accusantium a culpa illo!</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 panel">
                      <div className="service-item h-100">
                        <h4>Ecommerce Website</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quasi minima consequatur fugiat atque voluptates at accusantium a culpa illo!</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 panel">
                      <div className="service-item h-100">
                        <h4>Admin Panel Setup</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quasi minima consequatur fugiat atque voluptates at accusantium a culpa illo!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-sec" id="portfolio">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-12">
                <div className="portfolio-content">
                  <h2 className="sec-title">My <span>Work</span></h2>
                  {/* <Fancybox> */}
                    <div className="portfolio-listing">
                      {data.slice(0, portfolioItems).map((item) => {
                        return (
                          <div key={item.id} className="portfolio-item">
                            <div className="portfolio-data">
                              {/* <h5>{item.name}</h5> */}
                              {/* <a data-fancybox="gallery" href={item.image}> */}
                                <Image alt={item.name} src={item.image} layout="fill" objectFit='cover' />
                              {/* </a> */}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  {/* </Fancybox> */}
                  <div className="load-more">
                    <button onClick={loadMorePortfolio}>load more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blogs-sec" id="blog">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10  col-12">
                <h2 className="sec-title">My <span>Blogs</span></h2>
                <div className="blogs-listing">
                  <div className="row g-4">
                    {blogsData.slice(0, blogItems).map((curBlog) => {
                      return (
                        <div key={curBlog.id} className="col-lg-6 col-12">
                          <div data-blogid={curBlog.id} className="blog-card">
                            <h6>{curBlog.date}</h6>
                            <h4>{curBlog.title}</h4>
                            <div className="blog-body">
                              <p>{curBlog.cardtext}</p>
                            </div>
                            <a className="read-more" onClick={updateBlogModal} data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' role="button">read more<i className="fa-light fa-angles-right"></i></a>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="load-more">
                    <button onClick={loadMoreBlogs}>load more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-sec" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-12">
                <div className="contact-content">
                  <h2 className="sec-title">Contact <span>Me</span></h2>
                  <div className="row align-items-center justify-content-between g-4 flex-lg-row flex-column-reverse">
                    <div className="col-lg-7 col-12">
                      <div className="contact-form">
                        <h4>just say hello!</h4>
                        <h6>let us know about you!</h6>
                        <form onSubmit={validateForm}>
                          <div className="row g-3">
                            <div className="col-md-6 col-12">
                              <div className="input-field">
                                <input onChange={getFormData} value={formData.firstname} name="firstname" placeholder='First Name' type="text" />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className="input-field">
                                <input onChange={getFormData} value={formData.lastname} name="lastname" placeholder='Last Name' type="text" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-field">
                                <input onChange={getFormData} value={formData.email} name="email" placeholder='Your Email' type="text" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-field">
                                <input onChange={getFormData} value={formData.phone} name="phone" placeholder='Phone (Optional)' type="text" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-field">
                                <textarea onChange={getFormData} value={formData.message} name="message" placeholder='Message' ></textarea>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-field">
                                <button>Submit </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="personal-contact-info">
                        <h5>Contact Information</h5>
                        <ul>
                          <li><span>Address: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis adipisci, molestias debitis error</li>
                          <li><span>Phone:</span> <a href="tel:+1234567894">+1 234 567 894</a></li>
                          <li><span>Email:</span> <a href="mailto:mail@yourmail.com">mail@yourmail.com</a></li>
                        </ul>
                        <h5>Follow me</h5>
                        <ul className="social-links">
                          <li><a href="https://www.twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                          <li><a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li><a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                          <li><a href="https://www.github.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                          <li><a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>Copyright © 2022. All Rights Reserved.</p>
      </footer>
      {/* <Blog blogContent={blogsData[modalBlogId - 1]} /> */}
      <div className="modal fade blog-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="close-modal" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="fa-light fa-xmark"></i></button>
            <h3>{blogsData[modalBlogId - 1].title}</h3>
            <div className="body" dangerouslySetInnerHTML={{ __html: blogsData[modalBlogId - 1].body }}></div>
          </div>
        </div>
      </div>
    </>
  )
}
