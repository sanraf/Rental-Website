import React from "react";
import "../Styles/Contact.css";
import { MdEmail } from "react-icons/md";
import { BsArrowRight, BsChatDotsFill, BsTelephoneInboundFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import map from "../Assets/maps.jpg";

import { FaLocationPin } from "react-icons/fa6";
import logo from '../Assets/logo4.png'
function Contact() {
  return (
    <div className="contact-wrapper">
        <div className="line_logo">
        <hr/>
        <img src={logo} alt=''/>
        <hr/>
      </div>

        <h1>Contact us</h1>
        <h3>The velley of RosieTent </h3>

      <div className="cont-details">

        <div className="icon-holder">
          <div className="top-holder">
            <div className="cont-icon_wrapper">
            <MdEmail className="cont-icon" />
            </div>
          
          <h2>EMAIL</h2>
          <h6>EventEquipment@RosieTent.co.za</h6>
          </div>
         
          <div className="btm-txt">
            <button>Office Call<BsArrowRight className="btn-icon"/></button>
          </div>
        </div>



        <div className="icon-holder">
          <div className="top-holder">
            <div className="cont-icon_wrapper">
            <BsTelephoneInboundFill className="cont-icon" />
            </div>
          
          <h2>CALL</h2>
          <h6>+2701234567</h6>
          <p>Monday-Thursday 8:00am - 4:00pm</p>
          <p>Frday 8:00am - 2:00pm</p>
          </div>
         
          <div className="btm-txt">
            <a >

            </a>
            <button>Office Call<BsArrowRight className="btn-icon"/></button>
          </div>
        </div>



        <div className="icon-holder">
        <div className="top-holder">
          <div className="cont-icon_wrapper">
          <BsChatDotsFill className="cont-icon" />
          </div>
          
          <h2>CHAT</h2>
          <p>Monday-Thursday 8:00am - 4:00pm</p>
          <p>Frday 8:00am - 2:00pm</p>
        </div>
         
        <div className="btm-txt">
            <button>Office Call<BsArrowRight className="btn-icon"/></button>
          </div>
        </div>


        <div className="icon-holder">
        <div className="top-holder">
          <div className="cont-icon_wrapper">
          <FaLocationPin className="cont-icon" />
          </div>
        
          <h2>ADDRESS</h2>
          <h6>307 29th St.NE #107 Kempton Park</h6>
          <p>Monday-Thursday 8:00am - 4:00pm</p>
          <p>Frday 8:00am - 2:00pm</p>

        </div>

        <div className="btm-txt">
            <button>Office Call<BsArrowRight className="btn-icon"/></button>
          </div>
        </div>


      </div>
        <div className="cont_media-wrapper">
                <a target="_blank" rel="noopener" href={`https://wa.me/0123456789?text=${'hello'}`}>
                <FaFacebook className='cont_media-icon'/>
                </a>
                <a target="_blank" rel="noopener" href={`https://wa.me/0123456789?text=${'hello'}`}>
                <FaWhatsapp className='cont_media-icon'/>
                </a>
                <a target="_blank" rel="noopener" href={`https://wa.me/0123456789?text=${'hello'}`}>
                <FaTwitter className='cont_media-icon'/>
                </a>
        </div>

        <div className="copyright_wrapper">
          <hr/>
        <h5>&#64; 2024 | Rosi-Tent Event Equipment For Hire All | Rights Reserved</h5>
        </div>
        
      
    </div>
  );
}

export default Contact;
