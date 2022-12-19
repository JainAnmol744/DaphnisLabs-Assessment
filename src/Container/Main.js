import React from 'react'
import Header from '../Components/Header/Header'
import NavBar from '../Components/Navbar/NavBar'
import Sidebar from '../Components/Sidebar/Sidebar'
import TabletCard from '../Components/TabletCard/TabletCard'
import './Main.css'

function Main() {
  return (
    <div>
      <NavBar />
      <Header />
      
          <div className="bottomContent">
                <div className="left">
                <Sidebar />
                </div>
                <div className="right">
                <TabletCard/>
                <TabletCard/>
                <TabletCard/>
               <TabletCard/>
               <TabletCard/>
               <TabletCard/>       
                </div>
            </div>
        
      </div>

    
  )
}

export default Main