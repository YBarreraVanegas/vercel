import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="card-link">
      <article className="card">
        {product.imagen && (
          <img
            src={product.imagen}
            alt={product.nombre}
            className="card-image"
          />
        )}
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
