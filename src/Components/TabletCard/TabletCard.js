import React from 'react'
import './TabletCard.css'
import hello from './hello.jpg'
import logo from './send.webp'
function TabletCard() {
  return (
    <div className='product'>
    <div className="productImg">
        <img src={hello} alt="" height="200px" width="275px" />
    </div>

    <div className="productText">
        <h2 className="productTitle">Favipiravir 400mg (Fabiflu) Tablets</h2>
        <h2 className="productPrice">Rs 1,775 <span>/ stripe</span></h2>

        <div className="productAddress">
            <h2>Glenmark Pharmaceutical Limited</h2>
            <span>Parvat Patiya, Surat, Gujrat</span>
        </div>

        <span className='divider'></span>

        <div className="contact">
        <img src={logo} alt="" height="30px" width="40px" />
            <span className='parentSpan'>Contact Supplier  <span className='childSpan'></span></span>
        </div>

    </div>
    <span className="bottomBg"></span>
</div>
  )
}

export default TabletCard
