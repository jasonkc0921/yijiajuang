import React, { useState } from 'react'
import { featured } from '../data'

export const Collections = () => {

    const [collections, setCollections] = useState(featured);
    return (
  <section>
    <div className='collection-title'>
      <h2>Featured Collections</h2>
      <div className='collections'>
        {collections.map((collection)=>{
          const {id, image} = collection;
          return (
            <div className='single-collection' key={id}>
              <img src={image} alt="" className='img'/>
  
            </div>
          )
        })}
  
      </div>
    </div>
  </section>
    )
}
