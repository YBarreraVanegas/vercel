import { useParams } from "react-router-dom";
import { useGetData } from "./useFetchs";
import Card from "./Cards/Card";
import React from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_URL}/products/${id}`;

  const { data, loading, error } = useGetData(url);
  console.log(data);
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
            <Card product={product} />
          </React.Fragment>
        ))}
    </div>
  );
};

export default ProductDetail;
