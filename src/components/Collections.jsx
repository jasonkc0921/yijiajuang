import React, { useState } from 'react'
import { featured } from '../data'
import styled from 'styled-components'

export const Collections = () => {

    const [collections, setCollections] = useState(featured);
    return (
      <CollectionContainer>
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
  </CollectionContainer>
    )
}

const CollectionContainer = styled.nav`


.collection-title::before {
  content: "";
  width: 100%;
  height: 80px;
  background-color: rgb(212,175,55);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: fill;
}

.collection-title {
  margin-top: 150px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 20px;
}

.collection-title h2 {
  font-weight: 700;
}

.collections {
  padding: 5rem 0rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 80%;
}

.single-collection {
  margin-top: 30px;
  margin-bottom: 0px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  position: relative;
  width: 300px;
  height: 350px;
  padding: none;
  border: none;
}

.single-collection img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: none;
  padding: none;
}

@media only screen and (max-width: 920px) {

  .single-collection {
    height: 350px;
  }

  
.collections {
  padding: 5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
}

}
`
