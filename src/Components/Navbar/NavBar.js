import React from 'react'
import './NavBar.css'
import acc from './account.webp'
import sq from './square.jpg'

function NavBar() {

    return (
        <nav class="navbar navbar-expand-lg  head">
  <div class="container-fluid">
     <img className="mx-2" src={sq} alt="" height="20px" width="20px" />
    <a class="navbar-brand" href="/">Medical Darpan</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav items me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Distributors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Manufactures</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Blog</a>
        </li>
      </ul>
      <a class="nav-link active" aria-current="page" href="/">Login</a>
      <img className="mx-2" src={acc} alt="" height="20px" width="20px" />
      
    </div>
  </div>
</nav>
    )
}

export default NavBar;