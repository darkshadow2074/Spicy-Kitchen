import React from 'react'
import {chickenMenu} from "./menuOverview"
import "./Menu.css"
import "./card.css"
// import img from "../assets/images/crousel1.jpg"
import menu1 from "../assets/images/menu1.jpeg"
import menu11 from "../assets/images/menu11.jpeg"
function Chicken({showMenu}) {
  console.log(showMenu);
    return (
       <> 
          {
             showMenu===false?
              chickenMenu.map(({id,title,description,discountedPrice,originalPrice,img},index)=>{
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
              }):<div style={{display:"flex",flexWrap:"wrap",width:"100%",flexDirection:"row",justifyContent:"space-evenly"}}>
                 <img  src={menu11} alt="Chicken Menu" width="400px" />
                 <img  src={menu1} alt="Chicken Menu" width="400px"/>
              </div>
          }
       </>
    )
}

export default Chicken
