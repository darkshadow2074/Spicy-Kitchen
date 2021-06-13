import React from 'react'
import {eggMenu} from "./menuOverview"
import "./Menu.css"
import "./card.css"
import img from "../assets/images/crousel1.jpg"
import img2 from "../assets/images/Egg Receipes.png"
function Egg({showMenu}) {
    return (
        <> 
        {
            showMenu===false?
            eggMenu.map(({id,title,description,discountedPrice,originalPrice},index)=>{
               return(
                  <div className={`menu${id}`}>
                     <div className="menuCardImg">
                         <img src={img} alt=""/>
                     </div>
                     <div className="menuCardSection">
                      <h3 className="menuHeading">
                        {title}
                      </h3>
                      <span className={`menuText`}>
                        {description}
                      </span>
                      <span className="priceSection">
                          <b>Rs.{discountedPrice}</b> <span className="originalPrice">(Rs.{originalPrice})</span>
                      </span>
                     </div>
                  </div>
               )
            }):<div style={{width:"600px",height:"auto"}}><img src={img2} alt="" style={{maxWidth:"100%"}}/></div>
        }
     </>
    )
}

export default Egg
