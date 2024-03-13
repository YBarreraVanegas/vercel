import { useState } from "react";
import CreateProductForm from "./CreateProductForm";
import CreateProductMessages from "./CreateProductMessages";
import { useMutation } from "react-query";
import axios from "axios";

const CreateProduct = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [imagen, setImagen] = useState([]);
  const [descripcion, setDescripcion] = useState("");

  const createProductMutation = useMutation(
    async (productData) => {
      const url = `${import.meta.env.VITE_URL}/products`;

      try {
        const response = await axios.post(url, productData);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    {
      onSuccess: () => {
        console.log("Producto creado exitosamente");
      },
      onError: (error) => {
        console.error("Error al crear el producto", error);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("nombre", nombre);
    productData.append("precio", precio);
    productData.append("cantidad", cantidad);
    productData.append("descripcion", descripcion);

    // Añadir las imágenes al FormData
    for (let i = 0; i < imagen.length; i++) {
      productData.append(`imagen`, imagen[i]);
    }

    createProductMutation.mutate(productData);
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
    // Recuperar todas las imágenes del input de archivo
    const newImagen = Array.from(e.target.files);
    setImagen(newImagen);
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      <CreateProductForm
        nombre={nombre}
        precio={precio}
        cantidad={cantidad}
        imagen={imagen} // Pasar las imágenes al formulario
        descripcion={descripcion}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onFileChange={handleFileChange}
        isLoading={createProductMutation.isLoading}
      />
      <CreateProductMessages
        isError={createProductMutation.isError}
        isSuccess={createProductMutation.isSuccess}
        isLoading={createProductMutation.isLoading}
        error={createProductMutation.error}
      />
    </div>
  );
};

export default CreateProduct;
