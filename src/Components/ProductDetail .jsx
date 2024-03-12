import { useParams } from "react-router-dom";
import { useGetData } from "./useFetchs";
import React from "react";
import ProductImage from "./ProductImage";

const ProductDetail = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_URL}/products/${id}`;

  const { data, loading, error } = useGetData(url);

  if (loading) {
    return <span className="loading">Cargando...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {Array.isArray(data) &&
        data.map((product) => (
          <React.Fragment key={product.id}>
            <article className="card">
              <ProductImage
                imagenData={product.imagen?.data}
                altText={product.nombre}
              />
              <div className="card-body">
                <h2 className="card-title">{product.nombre}</h2>
                <hr />
                <h2 className="card-text">Precio: {product.precio}$</h2>{" "}
                <h2 className="card-text">
                  Descripcion y Materiales: {product.descripcion}
                </h2>
              </div>
            </article>
          </React.Fragment>
        ))}
    </div>
  );
};

export default ProductDetail;
