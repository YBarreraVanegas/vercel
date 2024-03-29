// DeleteProduct.js
import React from "react";
import { useMutation } from "react-query";
import axios from "axios";

const DeleteProduct = ({ productId, onDelete }) => {
  const url = `${import.meta.env.VITE_URL}/products/${productId}`;
  const deleteProductMutation = useMutation(
    async () => {
      await axios.delete(url);
    },
    {
      onSuccess: () => {
        onDelete(); // Llamamos a la función onDelete cuando la eliminación tiene éxito
      },
      onError: (error) => {
        console.error("Error deleting product", error);
      },
    }
  );

  const handleDelete = () => {
    deleteProductMutation.mutate();
  };

  return (
    <div>
      <p>¿Estás seguro de que quieres eliminar este producto?</p>
      <button onClick={handleDelete} disabled={deleteProductMutation.isLoading}>
        Eliminar Producto
      </button>
    </div>
  );
};

export default DeleteProduct;
