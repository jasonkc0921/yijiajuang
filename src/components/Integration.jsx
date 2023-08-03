import React, { useState } from 'react'
import { integrates } from '../data'

export const Integration = () => {

  const [woods, setWoods] = useState(integrates);
  // const [readMore, setReadMore] = useState(false);
  return (
<section>
  <div className='integration-title'>
    {/* <h5>Integration of Chinese antique furniture into modern home</h5> */}
    {/* <div className='title-underline'>
    </div> */}
    <div className='tours'>
      {integrates.map((integrate)=>{
        const {id, image, title, info} = integrate;
        return (
          <div className='single-tour' key={id}>
            <img src={image} alt={title} className='img'/>

            <div className='tour-info'>
              <h5>{title}</h5>
              <p>{info}</p>
            </div>
          </div>
        )
      })}

    </div>
  </div>
</section>
  )
}
