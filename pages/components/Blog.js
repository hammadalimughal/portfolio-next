import React from 'react'

const Blog = ({blogContent}) => {
  return (
    <>
      {/* <!-- Modal --> */}
      <div className="modal fade blog-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="close-modal" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="fa-light fa-xmark"></i></button>
            <h3>{blogContent.title}</h3>
            <div className="body">{blogContent.body}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog