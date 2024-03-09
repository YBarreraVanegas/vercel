// ProductList.js
import { useState } from "react";
import UpdateProduct from "./UpdateProduct";
import DeleteProductButton from "./DeleteProductButton ";
import { useGetData } from "./useFetchs";

const ProductList = ({ onProductSelect }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const url =
    typeof process !== "undefined" && process.env.POSTGRES_URL_URL
      ? process.env.POSTGRES_URL_URL
      : "https://backend-websore.vercel.app/products";

  const { data: products = [], loading, error, refetch } = useGetData(url);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    onProductSelect(product); // Notifica al Dashboard que se ha seleccionado un producto
  };

  const clearSelectedProduct = () => {
    // Limpiar el producto seleccionado después de la actualización
    setSelectedProduct(null);
    // Refrescar la lista de productos después de la eliminación
    refetch();
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {products && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.nombre} - ${product.precio}
              <button onClick={() => handleSelectProduct(product)}>
                Seleccionar para Actualizar
              </button>
              <DeleteProductButton
                productId={product.id}
                onDelete={clearSelectedProduct}
              />
            </li>
          ))}
        </ul>
      )}
      {selectedProduct && (
        <UpdateProduct
          selectedProduct={selectedProduct}
          clearSelectedProduct={clearSelectedProduct}
        />
      )}
    </div>
  );
};

export default ProductList;
