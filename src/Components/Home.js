import React from 'react'
import '../Styles/Home.css'
import NavBar from './NavBar'
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function Home() {
  return (
    <div className='home-wrapper'>
        <NavBar/>

        <div className='content-wrapper'>
            <div className='hero-image'></div>
          

            <div className='hero-text'>
                <h1>Event</h1>
                <h1>Equipment</h1>
                <h1>For hire<span>.</span></h1>
                <hr className="first-hr"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='button-wrapper'>
                <button className='quote'>Get A Quote</button>
                </div>
                
                <div className="media-wrapper">
                  <a target="_blank" rel="noopener" href={`https://wa.me/0123456789?text=${'hello'}`}>
                  <FaFacebook className='media-icon'/>
                  </a>
                  <a target="_blank" rel="noopener" href={`https://wa.me/0123456789?text=${'hello'}`}>
                  <FaWhatsapp className='media-icon'/>
                  </a>
                  <a target="_blank" rel="noopener" href={`https://wa.me/0123456789?text=${'hello'}`}>
                  <FaTwitter className='media-icon'/>
                  </a>
                  <hr/>
                  <a href='tel:01235468'>
                  <p>+2701234567</p>

                  </a>
                  
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home