import React from "react";
import Card from "./Card";
import "../Styles/Products.css";
import { useGetData } from "./useFetchs";
const ContainerCards = () => {
  const url =
    typeof process !== "undefined" && process.env.POSTGRES_URL_URL
      ? process.env.POSTGRES_URL_URL
      : "https://backend-websore.vercel.app/products";

  const { data, loading, error } = useGetData(url);

  if (loading) {
    return <span className="loading">Cargando...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center products-title">Nuestro Catalogo</h1>
        <section className="container_home ">
          {Array.isArray(data) &&
            data.map((product) => (
              <React.Fragment key={product.id}>
                <Card product={product} />
              </React.Fragment>
            ))}
        </section>
      </div>
    </>
  );
};

export default ContainerCards;
