// DeleteProductButton.js
import React from "react";
import { useMutation } from "react-query";
import axios from "axios";

const DeleteProductButton = ({ productId, onDelete }) => {
  const url = `http://localhost:3000/products/${productId}`;

  const deleteProductMutation = useMutation(
    async () => {
      await axios.delete(url);
    },
    {
      onSuccess: () => {
        console.log("Product deleted successfully!");
        onDelete(); // Notifica al componente padre que se ha eliminado el producto
      },
      onError: (error) => {
        console.error("Error deleting product", error);
      },
    }
  );

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      deleteProductMutation.mutate();
    }
  };

  return <button onClick={handleDelete}>Eliminar Producto</button>;
};

export default DeleteProductButton;
