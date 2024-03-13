const CreateProductMessages = ({ isError, isSuccess, isLoading, error }) => {
  return (
    <div>
      {isError && (
        <p>
          Error al crear el producto:{" "}
          {error.response?.data?.error || error.message || "Error desconocido."}
        </p>
      )}
      {isSuccess && (
        <p className="mesage-create">Producto creado exitosamente.</p>
      )}
      {isLoading && <p>Cargando...</p>}
    </div>
  );
};

export default CreateProductMessages;
