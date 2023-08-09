import React, { useState } from 'react'
import { data } from '../data'

export const Woods1 = () => {

    const [woods, setWoods] = useState(data);
    const [index, setIndex] = useState(0);
    const {id, image, title, info} = woods[index];
    const [readMore, setReadMore] = useState(false);
    

    return (
        
    <section className='woods-container'>

        <h2>What are our furniture made of?</h2>
        {/* const [index, setIndex] = useState(0);
        const {id, image, title, info} = woods[index]; */}


            <div className='wood-container single-wood'>
                <div className='wood-img'>
                <img src={image} alt={title} className='img'/>
                <div className='wood-btns'>

                        {woods.map((wood)=>{
                            const {id, image, title, info} = wood;
                            return (
                                <div>
                                <p className= {index === (id - 1) ? 'active' : 'wood-btn'} onClick={()=> setIndex(id - 1)} key={id}></p>
                                </div>
                            )
                        })}
                </div>
                </div>
                <div className='wood-info'>
                        <h5>{title}</h5>
                        <br/>
                        <p>{readMore ? info : `${info.substring(0,700)}...`}
              <button type='button' className='info-btn' onClick={()=>setReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
              </button>
               </p>
                </div>
            </div>


    </section>
  )
}
