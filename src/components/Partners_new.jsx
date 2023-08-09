import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { partner_list } from '../data'
import { FaQuoteRight } from 'react-icons/fa';

const Partners_new = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    fade: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className='partners_container partner_slider'>
    <h2>Our Partners</h2>
    <section className='partner_container'>
      <Slider {...settings}>
        {partner_list.map((partner) => {
          const { id, image, title } = partner;
          return (
            <article key={id}>
              <img src={image} alt={title} className='person-img' />
            </article>
          );
        })}
      </Slider>
    </section>
    </div>
  );
};

export default Partners_new;
