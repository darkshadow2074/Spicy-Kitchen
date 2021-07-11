import React from 'react'
import sliderImage from "./sliderImage"
function Slidercontent(props) {
    return (
        <section>
            {sliderImage.map(({title,description,urls},index)=>
             <div key={index} className={index===props.activeIndex?"slides active":"inactive"}>
                
                 <img className="slide-image" src={urls} alt=''/>
                 <h1 className="slide-title">{title}</h1>
                 <p className="slide-text">{description}</p>
             </div>
            )}
        </section>
    )
}

export default Slidercontent
