import '../Styles/About.css'
import video from '../assets/video.mp4'

function Contact() {
  return (
    <div className="container-about">
      <div className="text-column-about">
        <div className="title-about">
          <h1>Sobre Nosotros</h1>
        </div>
        <p className="text-p">
          Tres Leones, fundada en Bogotá en 2010, es una destacada fábrica de
          calzado deportivo 100% colombiano con más de 14 años de experiencia.
          Nos especializamos en crear estilos deseados con los mejores
          materiales y a precios competitivos. Nuestra misión es ofrecer
          productos de alta calidad, respaldados por artesanos y materiales de
          primera, fusionando tradición artesanal y excelencia contemporánea.
          Cada par refleja nuestro compromiso y orgullo por nuestra herencia
          colombiana.
        </p>
      </div>
      <div className="local-video-about">
        <video loop muted autoPlay className="video-about">
          <source src={video} />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  )
}

export default Contact
