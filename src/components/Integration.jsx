import React, { useState } from 'react'
import { integrates } from '../data'
import styled from 'styled-components'

export const Integration = () => {

  const [woods, setWoods] = useState(integrates);
  // const [readMore, setReadMore] = useState(false);
  return (
<IntegrationContainer>
<section>
  <div className='integration-title'>
  <h2>Seamless Integration</h2>
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
</IntegrationContainer>
  )
}

const IntegrationContainer = styled.nav`

.integration-title::before {
  content: "";
  width: 100%;
  height: 80px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: fill;
}

.integration-title {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 20px;
}

.integration-title h2 {
  font-weight: 700;
  color: white;
}

.tours {
  padding: 5rem 0;
  display: grid;
  gap: 1rem;
  width: 80%;
}


.single-tour {
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  position: relative;
  width: 80%;
  height: 400px;
  padding: 20px;
}

.single-tour:hover {
  box-shadow: var(--shadow-3);
}

.single-tour .img {
  height: 5rem;
  width: 10rem;
  border: none;
  border-top-right-radius: var(--borderRadius);
  border-top-left-radius: var(--borderRadius);
}

.tour-info {
  padding: 1rem 1rem;
  font-size: 10px;
}

.tour-info h5 {
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1.5;
}
.tour-info p {
  margin-bottom: 1.25rem;
  line-height: 1.5;
  color: var(--grey-500);
}


@media only screen and (max-width: 920px) {

.single-tour {
  height: 350px;
}

}

@media only screen and (max-width: 500px) {

  .single-tour {
    height: 300px;
  }

  .tours {
    width: 90%;
  }

  .single-tour .img {
    height: 3rem;
    width: 7rem;

}

`