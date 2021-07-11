import React from 'react'
import {rotiMenu} from "./menuOverview"
import "./Menu.css"
import "./card.css"
import menu3 from "../assets/images/menu3.jpeg"
function Roti({showMenu}) {
    return (
        <> 
        {
            showMenu===false?
            rotiMenu.map(({id,title,description,discountedPrice,originalPrice,img},index)=>{
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
            }):<div style={{width:"100%",height:"auto",margin:"auto",textAlign:"center"}}><img src={menu3} alt="Roti Menu" width="400px"/></div>
        }
     </>
    )
}

export default Roti
