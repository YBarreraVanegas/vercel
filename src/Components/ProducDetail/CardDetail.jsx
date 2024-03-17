import { Carousel } from 'react-bootstrap'
import '../../Styles/detai.css'
const CardDetail = ({ product }) => {
  // Parsear la cadena JSON y eliminar las barras invertidas
  const imageUrls = product.imagen
    .replace(/[{}"]/g, '')
    .split(',')
    .map(img => img.trim())

  return (
    <article className="container container-custom">
      {imageUrls && imageUrls.length > 0 && (
        <Carousel>
          {imageUrls.map((imageUrl, index) => (
            <Carousel.Item key={index}>
              <img
                className="container-img"
                src={imageUrl}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <div className="card-body">
        <h2 className="card-title">{product.nombre}</h2>
        <hr />
        <h2 className="card-text">Precio: {product.precio}$</h2>
        <h2 className="card-text">Descripción: {product.descripcion}</h2>
        {product.cantidad.length === 0 ? (
          <p>No hay stock disponible</p>
        ) : (
          <p>Stock disponible: {product.cantidad}</p>
        )}
      </div>
    </article>
  )
}

export default CardDetail
