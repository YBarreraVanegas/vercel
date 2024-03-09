import { useMutation } from "react-query";
import axios from "axios";
import CreateProductForm from "./CreateProductForm";
import CreateProductMessages from "./CreateProductMessages ";
import { useState } from "react";

const CreateProduct = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState("");

  const url = "http://localhost:3000/products";

  const createProductMutation = useMutation(
    async (productData) => {
      try {
        const response = await axios.post(url, productData);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    {
      onSuccess: () => {
        console.log("Poroduct created successfully!");
      },
      onError: (error) => {
        console.error("Error creating product", error);
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

    if (imagen) {
      productData.append("imagen", imagen);
    }

    createProductMutation.mutate(productData);
    console.log(productData);
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
      <h2>Crear Producto</h2>
      <CreateProductForm
        nombre={nombre}
        precio={precio}
        cantidad={cantidad}
        imagen={imagen}
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
