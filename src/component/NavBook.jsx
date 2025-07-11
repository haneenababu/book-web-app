import React from 'react'
import {Link} from 'react-router-dom';
const NavBook = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Add book</a>
        <Link class="nav-link" to="/ForView">view all book</Link>
        <Link class="nav-link" to="/DeleteBook">delete book</Link>
        <Link class="nav-link" to="/SearchBook">Search book</Link>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBook