import React, { useState } from 'react'
// import './styles.css';

const IrregularGrid = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
      };
    
      const handleClose = () => {
        setSelectedImage(null);
      };

  return (
  <div className='modern-wrapper'>
    <section className='modern-container'>
      <div className='modern-text'>
      <h4 className='modern-title'>The Captivating Blend of Oriental Furniture and Modern Design</h4>
      <p>The seamless integration of Oriental furniture into modern homes creates a captivating blend of cultural aesthetics and contemporary design.</p>
      <br/>
        <p>These curated spaces effortlessly harmonize traditional and modern elements, where Oriental furniture acts as a focal point, commanding attention amidst clean lines and minimalistic backdrops.</p>
        <br/>
        <p>The deliberate placement and careful selection of furniture pieces achieve a balanced visual flow, with rich colors and textures enhancing the overall design. These homes showcase the successful marriage of different styles, highlighting the timeless appeal and cultural significance of Oriental furniture within a modern context.</p>
        <br/>
        <p>The result is an atmosphere that exudes elegance, sophistication, and a seamless fusion of tradition and innovation.</p>
      </div>
      <div className='design-container'>
      <div className='panel'>
        <img src="./images/Chinese-Lattice.jpg" alt="chinese panel" />
      </div>
    <div className="grid-container">
      <div className="item item1" onClick={() => handleClick("./images/design1.jpg")}>
          <img src="./images/design1.jpg" alt="" />
      </div>
      <div className="item item2" onClick={() => handleClick("./images/design2.jpg")}>
          <img src="./images/design2.jpg" alt="" />
      </div>
      <div className="item item3" onClick={() => handleClick("./images/design3.jpg")}>
      <img src="./images/design3.jpg" alt="" />
      </div>
      <div className="item item4" onClick={() => handleClick("./images/design4.jpg")}>
      <img src="./images/design4.jpg" alt="" />
      </div>
      <div className="item item5" onClick={() => handleClick("./images/design5.jpg")}>
      <img src="./images/design5.jpg" alt="" />
      </div>
      <div className="item item6" onClick={() => handleClick("./images/design6.jpg")}>
      <img src="./images/design6.jpg" alt="" />
      </div>
      <div className="item item7" onClick={() => handleClick("./images/design7.jpg")}>
      <img src="./images/design7.jpg" alt="" />
      </div>
      <div className="item item8" onClick={() => handleClick("./images/design8.jpg")}>
      <img src="./images/design8.jpg" alt="" />
      </div>
      {selectedImage && (
          <div className="popup">
            <div className="popup-inner">
              <img src={selectedImage} alt="Enlarged Image" />
              <button className="close-btn" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        )}
    </div>
    </div>
    </section>
    </div>
  );
};

export default IrregularGrid;