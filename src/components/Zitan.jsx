import React from 'react'
import styled from 'styled-components'

export const Zitan = () => {
  return (
    <ZitanContainer>
    <section className='zitan-container'>
    <div className='zitan'>
        <div className='zitan-image'>
            {/* <p>picture</p> */}
            <img src="../images/zitan_care.png" alt="a hand cleaning the surface of a zitan furniture" />
        </div>
        <div className='zitan-text'>
        <p>
            
        Zitan wood is highly regarded as one of the most valuable and sought-after materials for furniture due to its exceptional durability, beautiful grain patterns, and rich, dark colors. However, to ensure the longevity and beauty of your furniture made with zitan wood, proper care is essential.
        </p><br/>
        <p>
        In this article, we will provide you with detailed instructions on how to take care of furniture made with zitan wood, offering maintenance tips, cleaning guidelines, and protective measures.
        </p><br/>

        <ul>
          <li>Regular Dusting To prevent the buildup of dust and debris on your zitan wood furniture, regular dusting should be performed. Use a soft, lint-free cloth or a feather duster to gently remove any surface dust. Avoid using rough fabrics or abrasive materials as they may scratch the wood.</li>
          <li>Avoid Direct Sunlight and Extreme Temperatures Zitan wood is susceptible to damage from direct sunlight and extreme temperatures. Prolonged exposure to sunlight can cause the wood to fade and lose its original color. It is advisable to position your furniture away from windows or use curtains or blinds to protect it from direct sunlight</li>
          <li> Moisture Control Excessive moisture can damage zitan wood furniture. To maintain its proper moisture balance and prevent warping or cracking, it is important to control the humidity levels in your home. Avoid placing zitan wood furniture in areas prone to moisture, such as bathrooms or basements. Use a dehumidifier in humid environments to regulate the moisture levels.</li>
          <li>Cleaning Guidelines When it comes to cleaning zitan wood furniture, it is crucial to use mild and non-abrasive cleaning solutions. Follow these steps to clean your furniture properly: - Mix a small amount of mild soap or furniture cleaner with water. - Dip a soft cloth into the solution, ensuring it is not soaking wet. - Gently clean the surface of the furniture, following the grain patterns. - Avoid excessive scrubbing or applying too much pressure. - After cleaning, wipe the furniture with a clean, damp cloth to remove any soap residue. - Finally, dry the surface thoroughly with a soft, dry cloth. Avoid using strong chemicals, vinegar, or ammonia-based cleaners, as they can damage the protective finish and the wood itself. Always test any cleaning solution on a small, inconspicuous area before applying it to the entire furniture piece.</li>
        <li>Polishing and Protection To maintain the luster and protect the zitan wood furniture, occasional polishing is recommended. Follow these steps for effective polishing: - Use a high-quality, non-silicone-based furniture polish or wax. - Apply a small amount of polish to a soft cloth. - Gently rub the polish onto the wood, following the grain patterns. - Allow the polish to dry according to the manufacturer's instructions. - After drying, buff the surface with a clean, soft cloth to bring out the shine. Regular polishing will help to restore and enhance the natural beauty of the zitan wood, while also providing a protective layer against daily wear and tear.</li>
        <li>Avoid Harsh Impact and Weight Zitan wood is known for its solid and resilient nature. However, it is important to avoid subjecting the furniture to harsh impacts or excessive weight. Prevent scratches, dents, or cracks by using protective pads or coasters under heavy objects. Lift and move furniture rather than dragging it across the floor to avoid scratches or damage to the wood.</li>
        <li>Professional Maintenance For extensive damage or intricate restoration work, it is advisable to seek professional assistance. Experienced furniture restorers specialize in working with valuable wood materials like zitan and can provide necessary repairs, refinishing, or maintenance services.</li>
        </ul>

        <p>
        Taking care of furniture made with zitan wood requires regular maintenance, protective measures, gentle cleaning practices, and avoidance of harsh conditions. By following the guidelines provided in this article, you can ensure that your zitan wood furniture remains beautiful, durable, and an heirloom to be cherished for generations to come.
        </p><br/>
       
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
    width: 100%;
    // height: 900px;
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
