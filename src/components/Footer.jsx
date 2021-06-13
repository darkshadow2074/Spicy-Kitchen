import React from 'react'
import {MdEmail,MdPermPhoneMsg} from "react-icons/md"
import "./footer.css"
function Footer() {
    const style = { color: "#FF2F00"}
    return (
        <div className="footer" id="Contact">
        <div className="connect">
          <p className="queries">For Any Queries Connect us</p>
          <div className="icons-section"> 
              <span className="icon1"><MdEmail style={style}/> <span className="email">archanasankolli@gmail.com</span></span>
              <span className="icon2"> <MdPermPhoneMsg style={style} /> <span className="phone">8197403149</span> </span>
          </div> 
        </div>
        <p className="copy">All &copy;2021 Rights Reserved To <span className="name">Mrs. Archana Sankolli</span></p>
        </div>
    )
}

export default Footer
