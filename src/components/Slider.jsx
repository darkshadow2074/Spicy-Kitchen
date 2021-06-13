import React,{useState,useEffect} from 'react'
import sliderImage from "./sliderImage.js"
import Arrow from "./Arrow"
import Dots from "./Dots"
import Slidercontent from "./Slidercontent"
import "./Crousel.css"
const len = sliderImage.length-1; 
function Slider() {
    const [activeIndex,setActiveIndex] = useState(0);
    useEffect(()=>{
       const interval =  setInterval(()=>setActiveIndex(activeIndex===len?0:activeIndex+1),3000)

        return ()=> clearInterval(interval)
    },[activeIndex]);
    return (
        <div className="slider-container">
            <Slidercontent activeIndex={activeIndex} />
            <Arrow  prevSlide={()=> setActiveIndex(activeIndex<1?len:activeIndex-1)} nextSlide={()=>setActiveIndex(activeIndex===len?0:activeIndex+1)}/>
            <Dots activeIndex={activeIndex} onClick={(activeIndex)=>setActiveIndex(activeIndex)} />
        </div>
    )
}

export default Slider
