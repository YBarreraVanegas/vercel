import React, { useEffect, useState } from "react";

const ProductImage = ({ imagenData, altText }) => {
  const [imageUrl, setImageUrl] = useState("");

  // Función para construir la URL de la imagen
  const buildImageUrl = (data) => {
    try {
      const imageData = btoa(
        new Uint8Array(data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

      return `data:image/jpeg;base64,${imageData}`;
    } catch (error) {
      console.error("Error al construir la URL de la imagen", error);
      return null;
    }
  };

  useEffect(() => {
    // Verificar si hay datos de imagen
    if (imagenData) {
      const newImageUrl = buildImageUrl(imagenData);
      setImageUrl(newImageUrl);
    }
  }, [imagenData]);

  return (
    <>
      {imageUrl ? (
        <img src={imageUrl} alt={altText} className="img_home card-img-top" />
      ) : (
        <span>Error al cargar la imagen</span>
      )}
    </>
  );
};

export default ProductImage;
