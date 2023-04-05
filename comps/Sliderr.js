import { motion} from 'framer-motion';


import { useState } from 'react';
export default function Sliderr() {
  
 
    
    const images = [
      { id: 1, src:"/static/images/img1.png", alt: 'Image 1' },
      { id: 2, src:"/static/images/img2.png", alt: 'Image 2' },
  
    ];
    const SliderImage = ({ image }) => {
      return (
        <motion.img
          className="slider-image"
          src={image.src}
          alt={image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      );
    };
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
      setCurrentImage((currentImage + 1) % images.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImage(
        currentImage === 0 ? images.length - 1 : currentImage - 1
      );
    };
  
    return (
      <div className="slider-container">
        <button className="slider-button prev" onClick={handlePrevImage}>
        {'<'}
        </button>
        <SliderImage image={images[currentImage]} />
        <button className="slider-button next" onClick={handleNextImage}>
         {">"}
        </button>
      </div>
    );
}
