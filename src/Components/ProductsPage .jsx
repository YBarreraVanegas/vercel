import { useGetData } from './useFetchs'
import ProductCarousel from './Carrusel'
import '../Styles/Products.css'
import Loader from './Loader'

const ProductsPage = () => {
  const url = `${import.meta.env.VITE_URL}/products`

  const { data, loading, error } = useGetData(url)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="container">
      <h1 className="text-center">Coleccion</h1>
      {data && <ProductCarousel products={data} />}
    </div>
  )
}

export default ProductsPage
