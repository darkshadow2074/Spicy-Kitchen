import React , {useState} from 'react'
import Chicken from "./Chicken"
import Egg from "./Egg"
import Roti from "./Roti"
import Rice from "./Rice"
import "./Menu.css"



function Menu() {
    const [router,setRouter] = useState("chicken");
    const [showFullMenu,setFullMenu] = useState(false)
    return (
        <div className="menu-component">
            <div className="menu" id="Menu">
               <h1 className="menu-heading">Our Special Serving's</h1>
               <div className="menuSelection">
                   <button className={router==="chicken"?"activeMenu disable":"chicken "} onClick={()=>setRouter("chicken")}>Chicken Items </button>
                   <button className={router==="egg"?"activeMenu disable":"egg "}  onClick={()=>setRouter("egg")}>Egg Items </button>
                   <button className={router==="roti"?"activeMenu disable":"roti "} onClick={()=>setRouter("roti")}>Roti Items</button>
                   <button className={router==="rice"?"activeMenu disable":"rice "} onClick={()=>setRouter("rice")}>Rice Items</button>
               </div>
               <div className="menu-container">
                  {router==="chicken"&&<Chicken showMenu={showFullMenu} />}
                  {router==="egg"&&<Egg showMenu={showFullMenu} />}
                  {router==="roti"&&<Roti showMenu={showFullMenu} />}
                  {router==="rice"&&<Rice showMenu={showFullMenu} />}

               </div>
               <div className="btn-container">
                   <button className="fullMenu" onClick={()=>{setFullMenu(showFullMenu===false?true:false)}}>{showFullMenu===false?"Show Full Menu":"Hide Full Menu"}</button>
               </div>
            </div>
        </div>
    )
}

export default Menu
