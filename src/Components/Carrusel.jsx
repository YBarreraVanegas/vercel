import React from "react";
import ProductImage from "./ProductImage";
import { Carousel } from "react-bootstrap";
import "../Styles/carrusel.css";
import { Link } from "react-router-dom";

const ProductCarousel = ({ products }) => {
  // Repetir productos para llenar el carrusel
  const repeatedProducts = Array.from({ length: 4 }, () => products).flat();

  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Cambiar automáticamente cada 3 segundos
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === repeatedProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [repeatedProducts.length]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {repeatedProducts.map((product, idx) => (
        <Carousel.Item key={idx} className="custom-carousel-item">
          <div className="overlay-container">
            <Link to={`/product/${product.id}`} className="card-link">
              <div className="custom-carousel-image">
                <ProductImage
                  imagenData={product.imagen?.data}
                  altText={product.nombre}
                />
              </div>
            </Link>
            <div className="overlay-text">
              <h3>{product.nombre}</h3>
              <p>Precio: {product.precio}$</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;