import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({ images }) => {
    return (
      <Carousel interval={null} className="rounded shadow">
        {images.map((img, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              style={{ objectFit: 'cover', height: 'auto' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
  
  export default ImageCarousel;