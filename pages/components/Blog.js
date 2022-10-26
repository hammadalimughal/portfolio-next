import React from 'react'

const Blog = (props) => {
  return (
    <>
      {/* <!-- Modal --> */}
      <div className="modal fade blog-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="close-modal" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="fa-light fa-xmark"></i></button>
            <h3>{props.blogContent.title}</h3>
            <div className="body" dangerouslySetInnerHTML={{__html: props.blogContent.body}}></div>  
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog