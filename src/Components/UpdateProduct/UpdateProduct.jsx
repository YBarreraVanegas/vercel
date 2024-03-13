import { useEffect, useState } from "react";
import UpdateProductForm from "./UpdateProductForm";
import UpdateProductMessages from "./UpdateProductMessages";
import { useMutation } from "react-query";
import axios from "axios";

const UpdateProduct = ({ selectedProduct, clearSelectedProduct }) => {
  const { id: productId } = selectedProduct;

  const url = `${import.meta.env.VITE_URL}/products/${productId}`;

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
        console.log("Producto actualizado exitosamente");
        clearSelectedProduct(); // Limpiar el producto seleccionado después de la actualización
      },
      onError: (error) => {
        console.error("Error al actualizar el producto", error);
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
    const precioNumber = parseFloat(precio);

    const productData = new FormData();
    productData.append("nombre", nombre);
    productData.append("precio", precioNumber);
    productData.append("cantidad", cantidad);
    productData.append("descripcion", descripcion);

    if (imagen) {
      productData.append("imagen", imagen);
    }

    console.log(
      "Datos del formulario:",
      Object.fromEntries(productData.entries())
    );

    updateProductMutation.mutate(productData, {
      // Pasar la URL correcta con el productId
      url: `${import.meta.env.VITE_URL}/products/${productId}`,
    });
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

  const handleCancel = () => {
    // Restablecer los campos del formulario
    setNombre(selectedProduct.nombre || "");
    setPrecio(selectedProduct.precio || "");
    setCantidad(selectedProduct.cantidad || "");
    setDescripcion(selectedProduct.descripcion || "");
    setImagen(null);
    // Deseleccionar el producto
    clearSelectedProduct();
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
      <button onClick={handleCancel}>Cancelar</button>
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
