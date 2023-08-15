import React, { useState } from 'react'
import styled from 'styled-components'
import material from '../data'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Woods = () => {
    const [woods, setWoods] = useState(material);



    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
      
        return (
        <WoodContainer>
          <section className='wood-container'>
            <div className='text-container'>
              <div className='text-line'></div>
              <h2 className='wood-text'>What Are We Made of?</h2>
              <div className='text-line'></div>
            </div>
            <div className='wood-display'>
            <Slider {...settings}>
              {woods.map((wood) => {
                const { id, image, title, info } = wood;
                return (
                  <article key={id}>
                        
                            <img src={image} alt={title} className='w-img' />


                    <h6 className='name'>{title}</h6>
                  </article>
                );
              })}
            </Slider>
            </div>
          </section>
          </WoodContainer>
        );
}

const WoodContainer = styled.nav`

.wood-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 100px auto;
    width: 100%;
    height: 200px;
    // text-align: center;
    
}

.text-container {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-context: left;
    align-item: left;
    width: 20%;
    height: 100%;
    // background-color: rgb(212, 175, 55);
    // margin-right: 30px;
    // margin-left: 40px;
}

.wood-text{
    width: 300px;
    padding: 10px 10px;
    color: black;
    font-size: 40px;
    font-weight: 700;
    text-align: left;


}

.text-line{
    width: 600px;
    height: 70%;
    border-left: 1px solid;
    margin: 5px 0px 5px 10px;
    padding: 10px 10px;

}

.wood-display {
    margin: 30px;
    max-width: 550px;
    color: black;
}

.image-container {
    position: relative;
    display: inline-block;
    margin: 10px;
  }

.w-img {
    width: 150px;
    height: 150px;
    border-radius: 0%;
    
}

.name {
  color: black;
  margin-top: 10px;
}

@media only screen and (max-width: 920px) {

  .wood-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-item; center;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 80%;
    // height: 200px;
    // text-align: center;
    
}

.text-container {
  width: 80%;
  // display: flex;
  // flex-direction: column;
  justify-content: center;
}

.wood-display {
  margin: 30px;
  max-width: 550px;
}

}

@media only screen and (max-width: 690px) {

  .w-img {
    width: 100px;
    height: 100px;
    border-radius: 0%;
    
}

}

@media only screen and (max-width: 500px) {

  .w-img {
    width: 50px;
    height: 50px;
    border-radius: 0%;
    
}

}

`