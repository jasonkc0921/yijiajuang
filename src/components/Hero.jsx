import { useEffect, useState } from 'react';
import { heroList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  const [heroes, setHeroes] = useState(heroList);
  const [currentHero, setCurrentHero] = useState(0);

  const prevSlide = () => {
    setCurrentHero((oldHero) => {
      const result = (oldHero - 1 + heroes.length) % heroes.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentHero((oldHero) => {
      const result = (oldHero + 1) % heroes.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentHero]);

  return (
    <section className='slider-container'>
      {heroes.map((Hero, HeroIndex) => {
        const { id, image, name, title, quote } = Hero;
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (HeroIndex - currentHero)}%)`,
              opacity: HeroIndex === currentHero ? 1 : 0,
              visibility: HeroIndex === currentHero ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className='hero-img' />
            <p className='title'>{title}</p>
          </article>
        );
      })}
      <div className='button-container'>
        <button type='button' className='prev' onClick={prevSlide}>
            <FiChevronLeft />
        </button>
        <button type='button' className='next' onClick={nextSlide}>
            <FiChevronRight />
        </button>
      </div>
    </section>
  );
};
export default Hero;