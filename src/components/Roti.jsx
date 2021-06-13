import React from 'react'
import {rotiMenu} from "./menuOverview"
import "./Menu.css"
import "./card.css"
import img from "../assets/images/crousel1.jpg"
function Roti() {
    return (
        <> 
        {
            rotiMenu.map(({id,title,description,discountedPrice,originalPrice},index)=>{
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
            })
        }
     </>
    )
}

export default Roti
