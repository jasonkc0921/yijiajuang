import React, { useState, useRef, useEffect } from 'react'
import { statements } from '../data'

export const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(statements);

    const animatedDivRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animatedDivRef.current.classList.add('fly-up-animation');
              observer.unobserve(animatedDivRef.current);
            }
          });
        },
        {
          root: null,
          threshold: 0.2, // Adjust the threshold value as needed
        }
      );
  
      if (animatedDivRef.current) {
        observer.observe(animatedDivRef.current);
      }
  
      return () => {
        if (animatedDivRef.current) {
          observer.unobserve(animatedDivRef.current);
        }
      };
    }, []);

    return (
  <section>
    <div className='testimonial-title' ref={animatedDivRef}>
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
