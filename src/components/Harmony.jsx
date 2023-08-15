import React from 'react'
import styled from 'styled-components'

export const Harmony = () => {
  return (
    <HarmonyContainer>
    <section className='harmony-container'>
        <div className='harmony'>
            <img src="../images/couple_chatting.png" alt="harmony" className='harmony-img'/>
            <div className='harmony-text'>
                <h2 className='harmony-title'>Harmony</h2>
                <div>
                <p>
                    Blending traditional Chinese furniture seamlessly into a modern home entails selecting complementary pieces that balance cultural depth with contemporary aesthetics. Choose items that share colors or materials, such as a Ming-inspired rosewood chair alongside a modern table. 
                </p>
                <br />
                <p> Establish focal points, like an ornate antique cabinet, for visual interest. Create equilibrium by placing contrasting elements, such as a wooden screen beside minimalist furnishings. Consider proportions, embracing classic Chinese elegance to complement modern design. Infuse cultural accents like Asian art for cohesion. The result is a harmonious, captivating space that bridges tradition and modernity with finesse and grace.                    
                </p>
                </div>
            </div>
        </div>
    </section>
    </HarmonyContainer>
  )
}

const HarmonyContainer = styled.nav`

.harmony-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
}

.harmony {
    width: 80%;
    position: relative;
    height: 100%;

}

.harmony-img {
    width: 100%;
    height: 100%;
}

.harmony-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0;
    color: rgb(212, 175, 55);
    padding: 30px;
    background: black;
    opacity: 70%;
}

.harmony-title {
    font-weight: 500;
}

.harmony-text p {
    opacity: 100%;
    font-weight: 500;
    font-size: 10px;
    color: white;
}



@media only screen and (max-width: 920px) {

    .harmony-text {

        width: 50%;
        padding: 20px;

    }
    
    .harmony-title {
        font-weight: 500;
    }
    
    .harmony-text p {
        opacity: 100%;
        font-weight: 500;
        font-size: 10px;
        color: white;
    }

}

@media only screen and (max-width: 500px) {
    .harmony-text {

        width: 80%;
        padding: 15px;

    }
}
`