import React from 'react'
import NavBook from './NavBook'

const AddBook = () => {
  return (
    <div>
      
        <div className="container">
          <NavBook></NavBook>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <br></br>
                      <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="book" className="form-label">Book Title:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="author" className="form-label">Author:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="description" className="form-label">Discription:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="category" className="form-label">Category:</label>
                          <select name="" id="" className="form-control">
                            <option value="text">Drama</option>
                            <option value="text">Fiction</option>
                            <option value="text">Biography</option>
                            <option value="text">Autobiography</option>
                          </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="photo" className="form-label">Cover Photo:</label>
                          <input type="file" name="img" id="img" className="form control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="publisher" className="form-label">Publisher Name:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="price" className="form-label">Price:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                          <button className="btn btn-info">Submit</button>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook