import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="card-link">
      <article className="card">
        <ProductImage
          imagenData={product.imagen?.data}
          altText={product.nombre}
        />
        <div className="card-body">
          <h2 className="card-title">{product.nombre}</h2>
          <hr />
          <h2 className="card-text">Precio: {product.precio}$</h2>
        </div>
      </article>
    </Link>
  );
};

export default Card;
