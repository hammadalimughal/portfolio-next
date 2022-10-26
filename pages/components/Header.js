// import Link from 'next/link'
// import Image from 'next/image'
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    return (
        <>
            <header className="main-header">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-11">
                            <div className="custom-nav">
                                <div className="brand-item"><span>EJ</span></div>
                                <nav id="navbar-example2">
                                <ul className="nav-list">
                                    <li className="nav-item">
                                        {/* <Link href="/#home"> */}
                                        <a href="#home" title="Home" className={router.pathname == '/' ? "nav-link active" : "nav-link"}><i className="fa-solid fa-house"></i></a>
                                        {/* </Link> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <Link href="/#about"> */}
                                        <a href="#about" title="About" className={router.pathname == '/about' ? "nav-link active" : "nav-link"}><i className="fa-solid fa-user"></i></a>
                                        {/* </Link> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <Link href="/#portfolio"> */}
                                        <a href="#services" title="Expertise" className={router.pathname == '/portfolio' ? "nav-link active" : "nav-link"}><i className="fa-solid fa-display-code"></i></a>
                                        {/* </Link> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <Link href="/#portfolio"> */}
                                        <a href="#portfolio" title="Portfolio" className={router.pathname == '/portfolio' ? "nav-link active" : "nav-link"}><i className="fa-solid fa-briefcase"></i></a>
                                        {/* </Link> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <Link href="/"> */}
                                        <a href="#blog" title="Blog" className={router.pathname == '/blog' ? "nav-link active" : "nav-link"}><i className="fa-solid fa-money-check-pen"></i></a>
                                        {/* </Link> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <Link href="/"> */}
                                        <a href="#contact" title="Contact" className={router.pathname == '/contact' ? "nav-link active" : "nav-link"}><i className="fa-solid fa-envelope-open"></i></a>
                                        {/* </Link> */}
                                    </li>
                                </ul>
                                </nav>
                            </div>
                            {/* <ul className="social-icons">
                                <li><a href="/"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                            </ul> */}
                                <div className="toggle-theme d-none">
                                    <div className="checkbox">
                                        <input type="checkbox" id="theme_switcher" />
                                            <label htmlFor="theme_switcher"></label>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header