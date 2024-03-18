import React from 'react'
import Card from './Card'
import '../../Styles/Products.css'
import { useGetData } from '../useFetchs'
import { Link } from 'react-router-dom'
import Loader from '../Loader'
const ContainerCards = () => {
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
      <h1 className="text-center products-title">Nuestro Catálogo</h1>
      <section className="container_home">
        {Array.isArray(data) &&
          data.map(product => (
            <Link
              to={`/products/${product.id}`}
              className="card-link"
              key={product.id}
            >
              <div className="cards">
                <Card product={product} />
              </div>
            </Link>
          ))}
      </section>
    </div>
  )
}

export default ContainerCards
