import styled from 'styled-components'

const Hero_new = () => {




  return (
    <HeroContainer>
    <section className='hero-container'>


          <article className='hero'>
            <img src="../images/modern_dining-2.png" alt="dining1" className="hero-img" />
            <div className='title'>
              <p>Bridging <span>Timeless Traditions </span></p> 
              <p>with Modern Comfort</p>
              </div>
          </article>


    </section>
    </HeroContainer>
  );
};

const HeroContainer = styled.nav`

.title {

  position: absolute;
  text-align: left;
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
  color: black;
  opacity: 100%;
  margin-bottom: 0.75rem;
  top: 20%;
  // left: 15%;
  line-height: 1.5;
}

.title span {
  color: rgb(212, 175, 55);
}

 .hero-container {
   height: 100vh;
   top: 0;
   left: 0;
}

.hero {
  width: 100%;
  height: 100%;
}

.hero-img {
  width: 100%;
  height: 100%;
  /* border-radius: 50%; */
  margin-bottom: 1rem;
  object-fit: fill;
  /* border: 4px solid var(--primary-200); */
  /* box-shadow: var(--shadow-3); */
}

@media (max-width: 900px) {
  .title {

    position: absolute;
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    color: black;
    opacity: 100%;
    margin-bottom: 0.75rem;
    top: 10%;
    // left: 15%;
    line-height: 1.5;
  }
  .hero-img {
    object-fit: cover;
  }
}

  @media (max-width: 550px) {
    .title {
  
      position: absolute;
      text-align: left;
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
      color: black;
      opacity: 100%;
      margin-bottom: 0.75rem;
      top: 10%;
      // left: 15%;
      line-height: 1.5;
    }

    .hero-img {
      object-fit: cover;
    }
  }

}

`
export default Hero_new;