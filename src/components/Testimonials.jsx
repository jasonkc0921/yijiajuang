import React, { useState } from 'react'
import { statements } from '../data'

export const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(statements);
    return (
  <section>
    <div className='testimonial-title'>
      <h2>What do our customers say?</h2>
      <div className='testimonials'>
        {testimonials.map((testimonial)=>{
          const {id, image, name, statement} = testimonial;
          return (
            <div className='single-testimonial' key={id}>
              <p>{statement}</p>
            <div className='testimonial-person'>
              <img src={image} alt={name} className='img'/>
              <p>{name}</p>
              </div>

            </div>
          )
        })}
  
      </div>
    </div>
  </section>
    )
}
