import React from 'react'
import NavBook from './NavBook'

const SearchBook = () => {
  return (
    <div>
        <div className="container">
            <NavBook></NavBook>
            <row>
                <div className="col col-12 col-sm-12 col-md-12 com-lg-12 col-xl-12 col-xxl-12">
                    <br></br>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-5 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="booktitle" className="form-label">Book Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info">Search</button>
                        </div>
                    </div>
                </div>
            </row>
        </div>
    </div>
  )
}

export default SearchBook