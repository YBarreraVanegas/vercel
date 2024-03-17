const Card = ({ product }) => {
  // Desestructurar la propiedad imagen del producto y acceder a la primera imagen
  const [firstImage] = product.imagen
    .replace(/[{""}]/g, '')
    .split(',')
    .map(img => img.trim())
  return (
    <>
      <article className="card ">
        {firstImage && (
          <img src={firstImage} alt={product.nombre} className="card-image" />
        )}
        <div className="card-body">
          <h2 className="card-title">{product.nombre}</h2>
          <hr />
          <h2 className="card-text">Precio: {product.precio}$</h2>
        </div>
      </article>
    </>
  )
}

export default Card
