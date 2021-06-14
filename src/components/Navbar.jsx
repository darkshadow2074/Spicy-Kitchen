import React, {useState} from 'react'

import {Link} from "react-scroll"
import  "../App.css"
import img from "../assets/images/logo2.png"

const navItems = [
    "About-Us","Menu","Order","Contact"
]
console.log(window.innerWidth)
 const Navbar = () => {
     const [clicked,setClicked] = useState(false);
     const [colorChange,setColorChange] = useState(false);
     const [size,setSize] = useState(window.innerWidth);
     const [height,setInnerHeight] = useState(window.scrollY);
     const responsiveHandler = () =>{
        setClicked(clicked===false?true:false);
     }
     const scrollColorChangeHandler = ()=>{
         window.scrollY>=550?setColorChange(true):setColorChange(false);
         setInnerHeight(window.scrollY);
     }
     const resizeHandler = () =>{
         setSize(window.innerWidth);
     }
    window.addEventListener("scroll",scrollColorChangeHandler);  
     window.addEventListener("resize",resizeHandler);
    return (
        <div>
           <nav className={colorChange?(height<=1205?"navbar active":"navbar menuActive"):"navbar"} >
            <div className="brand-logo">
                <img src={img}  className="logo" width="90px" height="90px" alt="brand-logo" />
            </div>
            <ul  className={colorChange?"nav active":"nav"}  style={{
                transform:clicked?"translate(0%)":" ", display:size<=768?(clicked?"flex":"none"):"flex",
                top:size<=768?(clicked&&"12vh"):"0vh"
            }}>
                {/* <li ></li> */}
                {
                    navItems.map((items,index)=> <li className="nav-items" key={index} style={{
                        animation: clicked?`navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`:" ",
                    }}><Link activeClass="active" to={`${items}`} spy={true} smooth={true} duration={500} className="nav-links" >{items}</Link></li>)
                }
            </ul> 
            <div className={clicked?"burger toggle":"burger"} onClick={responsiveHandler}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
           </nav> 
        </div>
    )
}

export default Navbar;
