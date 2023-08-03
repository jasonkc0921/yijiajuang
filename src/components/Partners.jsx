import React, { useState, useEffect } from 'react'
import { partner_list } from '../data'

export const Partners = () => {

    const [partners, setPartners] = useState(partner_list);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % partner_list.length);
      }, 3000); // Adjust the interval (in milliseconds) for slide change
  
      return () => {
        clearInterval(interval);
      };
    }, [partner_list.length]);

    return (
  <section className='partner_container'>
    <div className='partner_slider'>
      <h2>Our Partners</h2>
      <div className='partner_slides-container' 
      style={{
        transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Slide the container horizontally
      }}
      >
        {partners.map((partner, index)=>{
          const {id, image, title} = partner;
          return (
            <div  key={id}
            className={
            "partner_slide"
            }
            >
              <img src={image} alt={title} className='img'/>
            </div>
          )
        })}
  
      </div>
    </div>
  </section>
    )
}
