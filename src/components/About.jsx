import React from 'react'
import aboutImg from "../assets/images/logo2.png"
import {FaMapMarkerAlt}from "react-icons/fa"

import "../App.css"
function About() {
    return (
        <div className="about" id="About-Us">
            <h1 className="about-heading">About-Us</h1>
          <div className="about-container">  
            <div className="about-img">
                <img src={aboutImg} alt=" "  />
            </div>
            <div className="about-info">
               <h1 className="about-info-heading">Serving Best Quality  Home Made Food ...</h1>
               <p className="about-info-paragraph">Spicy kitchen was created in 2020 out of a passion for amazing food and service.  Through word of mouth, a lot of hard work and a commitment to producing
                  one-of-a-kind events, Spicy Kitchen has become one of the most beloved home-based restaurant.
                  We believe that using the freshest ingredients produces the best results. We are tireless in staying abreast of the latest food trends. And we are obsessed with creating customized menus and culinary masterpieces for our clients. Simply put: we exist to make your vision a reality. We believe in making our clients experience the taste of their home.
               <br />
               <span className="location">
                 <FaMapMarkerAlt style={{paddingRight:"6px",}}/><b>Mudhol</b>
               </span>
               </p>
            </div>     
          </div>
        </div>
    )
}

export default About
