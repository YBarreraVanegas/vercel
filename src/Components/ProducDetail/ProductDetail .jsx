import { useParams } from 'react-router-dom'
import { useGetData } from '../useFetchs'
import CardDetail from './CardDetail'
import ContactDetail from './ContactDetail'
import BotonWathsapp from '../BotonWathsapp'
import Loader from '../Loader'

const ProductDetail = () => {
  const { id } = useParams()
  const url = `${import.meta.env.VITE_URL}/products/${id}`

  const { data, loading, error } = useGetData(url)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }

  if (typeof data === 'object' && data !== null) {
    return (
      <div>
        <h2 className="h2-detail">Detalles del Producto</h2>
        <div className="container-detail">
          <CardDetail product={data} />
        </div>
        <ContactDetail />
        <BotonWathsapp />
      </div>
    )
  } else {
    return <span>No se encontraron datos para mostrar.</span>
  }
}

export default ProductDetail
