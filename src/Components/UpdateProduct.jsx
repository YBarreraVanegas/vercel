import { useMutation } from "react-query";
import axios from "axios";
import UpdateProductForm from "./UpdateProductForm ";
import UpdateProductMessages from "./UpdateProductMessages ";
import { useEffect, useState } from "react";

const UpdateProduct = ({ selectedProduct }) => {
  const { id: productId } = selectedProduct;

  const url = `http://localhost:3000/products/${productId}`;

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState("");

  const updateProductMutation = useMutation(
    async (productData) => {
      try {
        const response = await axios.put(url, productData);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    {
      onSuccess: () => {
        console.log("Product updated successfully!");
      },
      onError: (error) => {
        console.error("Error updating product", error);
      },
    }
  );

  useEffect(() => {
    setNombre(selectedProduct.nombre || "");
    setPrecio(selectedProduct.precio || "");
    setCantidad(selectedProduct.cantidad || "");
    setDescripcion(selectedProduct.descripcion || "");
    console.log("Datos del producto seleccionado:", selectedProduct);
  }, [selectedProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("nombre", nombre);
    productData.append("precio", precio);
    productData.append("cantidad", cantidad);
    productData.append("descripcion", descripcion);

    if (imagen) {
      productData.append("imagen", imagen);
    }

    console.log(
      "Datos del formulario:",
      Object.fromEntries(productData.entries())
    );

    updateProductMutation.mutate(productData);
  };

  const handleInputChange = (field, e) => {
    const value = e.target.value;
    switch (field) {
      case "nombre":
        setNombre(value);
        break;
      case "precio":
        setPrecio(value);
        break;
      case "cantidad":
        setCantidad(value);
        break;
      case "descripcion":
        setDescripcion(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  return (
    <div>
      <h2>Actualizar Producto</h2>
      <UpdateProductForm
        nombre={nombre}
        precio={precio}
        cantidad={cantidad}
        imagen={imagen}
        descripcion={descripcion}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onFileChange={handleFileChange}
        isLoading={updateProductMutation.isLoading}
      />
      <UpdateProductMessages
        isError={updateProductMutation.isError}
        isSuccess={updateProductMutation.isSuccess}
        isLoading={updateProductMutation.isLoading}
        error={updateProductMutation.error}
      />
    </div>
  );
};

export default UpdateProduct;
