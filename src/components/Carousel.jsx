/* eslint-disable react/prop-types */
import { useState } from "react";

const Carousel = ({ images }) => {
  let [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img
        alt="active c-image"
        src={images[active].small}
        className="c-image"
      />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            onClick={(e) => setActive(e.target.dataset.index)}
            data-index={index}
            src={photo.small}
            key={photo.small}
            className={active === index ? "active" : ""}
            alt="images"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
