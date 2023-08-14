import React, { useState } from 'react'
import styled from 'styled-components'
import { theme_list } from "../data"

export const Themes = () => {
    const [themes, setThemes] = useState(theme_list);
  return (

    <ThemeContainer>
        <section className='theme-container'>
            <div className='themes'>
                <div className='title-container'>
                <h2 className='theme-title'>Adaptability</h2>
                </div>
            {themes.map((theme)=> {
                const {id, image, title} = theme;
                return (
                <div key={id} className='single-theme'>
                    <img src={image} alt={title} className='theme-img'/>
                </div>
                )
            })}
            </div>
        </section>
    </ThemeContainer>
  )
}

const ThemeContainer = styled.nav`

.theme-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
}

.title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: absolute;
    z-index: 100;
    width: 200px;
    height: 100px;

}

.theme-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    color: black;
    width: 100%;
    height: 100%;
    background-color: rgb(212, 175, 55);
    // opacity: 70%;
    // border-radius: 50%;

}

.themes {

    display:grid;
    grid-template-columns: 50% 50%;
    grid-row: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 80%;

}

// .single-theme {
//     width: 400px;
//     height: 300px;
//     object-fit: cover;
// }

.theme-img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

@media only screen and (max-width: 920px) {

.theme-title {
    font-size: 15px;
}

.title-container {
    width: 150px;
    height: 70px;
}

}

@media only screen and (max-width: 760px) {

    .theme-title {
        font-size: 15px;
    }
    
    .title-container {
        width: 120px;
        height: 50px;
    }
    
}

@media only screen and (max-width: 550px) {

.theme-title {
    font-size: 10px;          
}
        
.title-container {
    width: 80px;
    height: 40px;
}
        
}

`