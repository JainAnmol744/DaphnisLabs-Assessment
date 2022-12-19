import React from 'react'
import './Sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
            <hr />
            <div className="center">
                <ul>
                    <p className="title" >Related Category</p>
                    <li><span>Paracetamol Tablets</span></li>   
                    <li><span> Paracetamol Syrup</span></li>                  
                    <li><span>Paracetamol Powder</span></li>
                    <li> <span style={{
                          backgroundColor:"teal",
                          color:"white",
                          borderRadius:"2px",
                          width:"100%",
                          paddingLeft:"10px"
                        }}>Aceclofenac &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp; x </span></li>
                    <li><span style={{paddingLeft:"5px"}}>Magaladrate Simethicone Oral Suspension</span></li>
                    <li><span style={{paddingLeft:"5px"}}>Mefenamic Paracetamol Syrup</span></li>
                    
                    <p className="title">Related Brands</p>
                    <li><span>Cipmol Paracetamol</span></li>
                    <li><span>Pandal Paracetamol Tablets</span></li>
                    <li><span>Combiflam</span></li>
                    <li><span>Crocin Tablets</span></li>
                    <li><span>Calpol Paracetamol Tablets</span></li>
                    <li><span>Sumo Tablets</span></li>
                    
                    <p className="title" >Business Type</p>
                    <li><span>Wholesaler</span></li>
                    <li><span>Manufacturer</span></li>
                    <li><span>Retailer</span></li>
                    <li><span>Exporter</span></li>
                    
                    <p className="title" > Strength</p>
                    <li><span style={{
                          backgroundColor:"teal",
                          color:"white",
                          borderRadius:"2px",
                          width:"100%",
                          paddingLeft:"10px"
                        }}>500mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x</span>
                    </li>
                    <li><span style={{
                          paddingLeft:"5px"
                        }}>600mg</span></li>
                    
                    <p className="title" > Manufacturer</p>
                    <li><span>Intas Pharmaceutical Ltd.</span></li>
                    <li><span>Alkem Laboratories Ltd.</span></li>
                    
                    <p className="title" >Prescription /Non prescription</p>
                    <li><span >Intas Pharmaceutical Ltd.</span></li>
                    <li><span>Alkem Laboratories Ltd.</span></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar