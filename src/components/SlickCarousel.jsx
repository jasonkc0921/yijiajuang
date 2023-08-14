import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components'
import Slider from 'react-slick';
import { statements } from '../data';
import { FaQuoteRight } from 'react-icons/fa';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <SlickContainer>
    <section className='slick-container'>
    <h2>What do our customers say?</h2>
      <Slider {...settings}>
        {statements.map((person) => {
          const { id, image, name, statement } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className='person-img' />
              <h5 className='name'>{name}</h5>
              <p className='text'>{statement}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
      </Slider>
    </section>
    </SlickContainer>
  );
};

export default SlickCarousel;


const SlickContainer = styled.nav`


.slick-container {
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 80vw;
  max-width: 800px;
  text-align: center;
}
.slick-slide img {
  display: inline-block;
}

.slick-prev::before {
  color: var(--primary-500) !important;
}
.slick-next::before {
  color: var(--primary-500) !important;
}


.slick-container h2 {
  font-weight: 700;
  margin: 30px;
}



.slick-slide img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
}

.icon {
  color: rgb(94, 53, 11);
}

.slick-prev::before {
  color: rgb(94, 53, 11) !important;
}
.slick-next::before {
  color: rgb(94, 53, 11) !important;
}


`