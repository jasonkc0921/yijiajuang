import React from 'react'
import styled from 'styled-components'

export const Soothing = () => {
  return (
    <SoothingContainer>
    <section className='soothing-container'>
        <div className='soothing'>
            <div className='soothing-text'>
                <h2 className='soothing-title'>Serenity</h2>
                <div>
                <p>
                Wood furniture exudes a soothing effect that transcends its functional purpose. Its organic textures, warm tones, and natural aesthetics create a calming ambiance. . 
                </p>
                <br />
                <p> Wood's connection to nature evokes a grounding sensation, reducing stress and promoting relaxation. Whether it's the gentle curves of a wooden chair or the rustic charm of a timber table, the presence of wood in your surroundings brings a touch of serenity, fostering a peaceful haven where you can unwind and find solace from the demands of modern life. 
                </p>
                </div>
            </div>
        </div>
    </section>
    </SoothingContainer>
  )
}

const SoothingContainer = styled.nav`

.soothing-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
}

.soothing {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    position: relative;
    height: 100%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.52), rgba(212, 175, 55, 0.73)), url('../images/soothing-1.png');

}

.soothing-img {
    width: 100%;
    height: 100%;
}



.soothing-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0;
    right: 0;
    color: rgb(212, 175, 55);
    padding: 30px;
    background: none;
    opacity: 70%;
}

.soothing-title {
    font-weight: 700;
    color: black;
}

.soothing-text p {
    opacity: 100%;
    font-weight: 500;
    font-size: 10px;
    color: white;
}



.soothing-img {
    object-fit: cover;
  }

@media only screen and (max-width: 920px) {

    .soothing-text {

        width: 50%;
        padding: 20px;

    }
    
    .soothing-title {
        font-weight: 500;
    }
    
    .soothing-text p {
        opacity: 100%;
        font-weight: 500;
        font-size: 10px;
        color: white;
    }

}

@media only screen and (max-width: 500px) {
    .soothing-text {

        width: 80%;
        padding: 15px;

    }
}
`