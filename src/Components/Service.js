import React from 'react'
import '../Styles/Service.css'
import tent from '../Assets/icons8-tent-100.png'
import table from '../Assets/icons8-table-64.png'
import delivery from '../Assets/icons8-delivery-100.png'
import logo from '../Assets/logo4.png'
import grass from '../Assets/icons8-grass-100.png'
import chair from '../Assets/icons8-chair-100.png'
import inatall_tent from '../Assets/icons8-tent-install.png'
import table_cover from '../Assets/icons8-cloth-100.png'
import chair_cover from '../Assets/icons8-cloth-chair.png'
function Service() {
  return (
    <div className="service-wrapper">
   
      <div className="line_logo">
        <hr/>
        <img src={logo} alt=''/>
        <hr/>
      </div>

      <h1>What <span>we offer</span></h1>

      <div className="icon-service">
        <div className="item-holder">
          <h3>1</h3>
          <img src={tent}/>
          <p>Stretch Tent</p>
        </div>

        <div className="item-holder">
          <h3>2</h3>
          <img src={chair}/>
          <p>Plastic Chairs</p>
        </div>

        <div className="item-holder">
          <h3>3</h3>
          <img src={table}/>
          <p>Foldable Tables</p>
        </div>

        <div className="item-holder">
          <h3>4</h3>
          <img src={table_cover}/>
          <p>Table Cover</p>
        </div>

        <div className="item-holder">
          <h3>5</h3>
          <img src={chair_cover}/>
          <p>Chair Cover</p>
        </div>

        <div className="item-holder">
          <h3>6</h3>
          <img src={grass}/>
          <p>Artificial Grass</p>
        </div>

        <div className="item-holder">
          <h3>7</h3>
          <img src={delivery}/>
          <p>Delivery</p>
        </div>

        <div className="item-holder">
          <h3>8</h3>
          <img src={inatall_tent}/>
          <p>Tent Installation</p>
        </div>
      </div>
    </div>
  )
}

export default Service
