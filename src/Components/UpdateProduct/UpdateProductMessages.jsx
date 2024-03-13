const UpdateProductMessages = ({ isError, isSuccess, isLoading, error }) => {
  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      {isError && <p style={{ color: "red" }}>Error: {error}</p>}
      {isSuccess && (
        <p style={{ color: "green" }}>Producto actualizado con éxito</p>
      )}
    </div>
  );
};

export default UpdateProductMessages;
