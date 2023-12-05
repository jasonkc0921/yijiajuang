import React from 'react'
import styled from 'styled-components'

export const Zitan = () => {
  return (
    <ZitanContainer>
    <section className='zitan-container'>
    <div className='zitan'>
        <div className='zitan-image'>
            {/* <p>picture</p> */}
            <img src="../images/blog3.jpg" alt="" />
        </div>
        <div className='zitan-text'>
        <p>
            
            Welcome to our esteemed showroom, where we proudly present a curated collection of Chinese traditional furniture crafted with the exquisite zitan wood. As connoisseurs of fine craftsmanship and cultural heritage, we are dedicated to preserving the timeless allure of this rare and precious material.
        </p><br/>
        <p>
            Zitan wood, renowned as the "purple sandalwood," is at the heart of our offerings. Its unique deep purple or brownish-black hue, complemented by its fine and smooth texture, exudes an air of opulence and sophistication. The rich color and natural luster of zitan wood make each piece a breathtaking masterpiece.
        </p><br/>
        <p>
        Our artisans, well-versed in centuries-old woodworking techniques, meticulously transform zitan wood into heirloom-worthy furniture. Each stroke of their chisels, every intricate inlay, and precisely carved detail narrate a story of Chinese heritage and artistry.
        </p><br/>
        <p>
            Stepping into our showroom, you will discover an array of remarkable pieces, including intricately carved cabinets, opulent screens, elegant chairs, and resplendent tables. Whether you seek a statement piece or an exquisite addition to your home, our diverse selection caters to discerning collectors and enthusiasts alike.
        </p><br/>
        <p>
            Embrace the elegance and cultural significance of Chinese traditional furniture with our zitan wood creations. Each piece not only adds a touch of grandeur to your living space but also connects you to the legacy of an ancient craft, preserved for generations to come. Welcome to a world where the past and present seamlessly blend, and where the legacy of zitan wood lives on through timeless masterpieces.
        </p>
        </div>
    </div>
    </section>
    </ZitanContainer>
  )
}

const ZitanContainer = styled.nav`

.zitan-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content:center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 50px;
    padding: 50px;
  }
  
  .zitan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }
  
  .zitan-text, .zitan-image {
    width: 100%;
    line-height: 2;
    padding: 10px;
    font-size: 15px;
  }

  .zitan-image img {
    width: 450px;
    height: 900px;
  }

  @media only screen and (max-width: 760px) {

    .zitanus {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content:center;
        align-items: center;
        width: 100%;
      }

      .zitan-text, .zitan-image {
        width: 100%;
      }

`
