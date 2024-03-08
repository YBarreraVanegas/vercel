import { useGetData } from "./useFetchs";
import ProductCarousel from "./Carrusel";
import "../Styles/Products.css";

const ProductsPage = () => {
  const url = "http://localhost:3000/products";
  const { data, loading, error } = useGetData(url);

  if (loading) {
    return <span className="loading">Cargando...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container">
      <h1 className="text-center">Coleccion</h1>
      {data && <ProductCarousel products={data} />}
    </div>
  );
};

export default ProductsPage;
