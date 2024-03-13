const CreateProductForm = ({
  nombre,
  precio,
  cantidad,
  imagen,
  descripcion,
  onSubmit,
  onInputChange,
  onFileChange,
  isLoading,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="product-form"
      encType="multipart/form-data"
    >
      <div className="product-form-section">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          className="product-form-input"
          onChange={(e) => onInputChange("nombre", e)}
        />
      </div>
      <div className="product-form-section">
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          className="product-form-input"
          id="precio"
          value={precio}
          onChange={(e) => onInputChange("precio", e)}
        />
      </div>
      <div className="product-form-section">
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          className="product-form-input"
          value={cantidad}
          onChange={(e) => onInputChange("cantidad", e)}
        />
      </div>
      <div className="product-form-section">
        <label htmlFor="imagen">Imagen:</label>
        <input
          type="file"
          id="imagen"
          onChange={onFileChange} // Ajustado para manejar múltiples imágenes
          className="product-form-input-imagen"
          multiple // Permite la selección de múltiples archivos
        />
      </div>
      <div className="product-form-section">
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          value={descripcion}
          className="product-form-textarea"
          onChange={(e) => onInputChange("descripcion", e)}
        />
      </div>
      <button type="submit" disabled={isLoading} className="button">
        {isLoading ? "Creando..." : "Crear Producto"}
      </button>
    </form>
  );
};

export default CreateProductForm;
