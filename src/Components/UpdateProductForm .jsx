const UpdateProductForm = ({
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
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => onInputChange("nombre", e)}
        />
      </div>
      <div>
        <label htmlFor="precio">Precio:</label>
        <input
          type="text"
          id="precio"
          name="precio"
          value={precio}
          onChange={(e) => onInputChange("precio", e)}
        />
      </div>
      <div>
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="text"
          id="cantidad"
          name="cantidad"
          value={cantidad}
          onChange={(e) => onInputChange("cantidad", e)}
        />
      </div>
      <div>
        <label htmlFor="imagen">Imagen:</label>
        <input type="file" id="imagen" name="imagen" onChange={onFileChange} />
      </div>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={(e) => onInputChange("descripcion", e)}
        />
      </div>
      <div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Actualizando..." : "Actualizar Producto"}
        </button>
      </div>
    </form>
  );
};

export default UpdateProductForm;
