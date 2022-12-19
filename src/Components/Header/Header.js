import React from 'react'
import './Header.css'
function Header() {
  return ( 
    <div className='container my-'>
    <div id='header_main '>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Medical Darpan</a></li>
    <li class="breadcrumb-item"><a href="/">Search</a></li>
    <li class="breadcrumb-item active" aria-current="page">FabiFlu Tablet</li>
  </ol>
</nav>
<div class="input-group mb-3 ">
  <input type="text" class="form-control" placeholder="Paracetamol" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  
    <button class="btn btn-outline-secondary" type="button" >Search</button>
</div>
      <div className='container  title d-flex'>
        Paracetamol <span  className="products"> (128 products)</span>
        <span className='item'>FabiFlu Tablet X</span>
        <span className='item'>500mg X</span> 
        <button className='remove'>Remove All</button>
      </div>
    
    </div>
    </div>
  )
}

export default Header