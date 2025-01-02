import React,{ useState , useEffect} from 'react'
import './news.css'
function news() {
    const images = [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/301',
        'https://picsum.photos/200/302',
        'https://picsum.photos/200/303',
      ];
      
      const App = () => {
        const [currentImage, setCurrentImage] = useState(0);
        const [isAnimating, setIsAnimating] = useState(false);
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            if (!isAnimating) {
              setCurrentImage((prevImage) => (prevImage + 1) % images.length);
            }
          }, 3000);
          return () => clearInterval(intervalId);
        }, [isAnimating]);
      
        const handleDotClick = (index) => {
          setCurrentImage(index);
        };
  return (
    <div>
      <div className="app">
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`image ${currentImage === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImage === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
    </div>
  )
}
}
export default news
