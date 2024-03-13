// Dashboard.js
import { useState } from "react";
import CreateProduct from "./CreatedProduct/CreateProduct";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import ProductList from "./ProductList ";
import DeleteProduct from "./DeleteProduct "; // Importa el componente de eliminación

export default function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleDeleteProduct = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteSuccess = () => {
    setDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <h1>Dashboard</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "10px" }}>
          <CreateProduct />
        </div>
        <div style={{ flex: 1 }}>
          {selectedProduct ? (
            <>
              <UpdateProduct
                selectedProduct={selectedProduct}
                clearSelectedProduct={() => setSelectedProduct(null)}
              />
              <button onClick={handleDeleteProduct}>Eliminar Producto</button>
              {isDeleteModalOpen && (
                <DeleteProduct
                  productId={selectedProduct.id}
                  onDelete={handleDeleteSuccess}
                />
              )}
            </>
          ) : (
            <ProductList onProductSelect={handleProductSelect} />
          )}
        </div>
      </div>
    </>
  );
}
