import { FaFacebook, FaWhatsapp, FaTiktok } from 'react-icons/fa' // Cambia la importación a 'react-icons/fa'
import '../../Styles/Contact.css'
import video from '../../assets/video2.mp4'

function ContactDetail() {
  return (
    <div className="detail">
      <h1 className="detail-h1">
        &#x1F31F; ¡Encuentra tus zapatos perfectos con nosotros! &#x1F31F;
      </h1>
      <div className="container-contact">
        <div className="text-column">
          <p className="text-p">
            ¿Buscas calzado para cualquier ocasión? ¡Estás en el lugar correcto!
            En nuestro negocio, nos especializamos en ofrecerte una amplia gama
            de opciones para satisfacer tus necesidades de estilo y comodidad.
            <span>
              <br />
              &#x1F6CD; Ventas al Por Mayor: ¡También ofrecemos la opción de
              compras al por mayor con descuentos especiales! Si estás
              interesado en adquirir nuestros productos en grandes cantidades,
              contáctanos para obtener más información sobre nuestros precios
              mayoristas y beneficios exclusivos.
            </span>
            <span>
              <br />
              &#x1F4F2; ¡Contáctanos hoy mismo a través de nuestras redes
              sociales y plataformas de mensajería para obtener atención
              personalizada y respuestas rápidas!
            </span>
          </p>
          <div className="social-buttons">
            <a
              href="https://www.facebook.com/diegoedinson.barrera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">
                <FaFacebook /> Facebook
              </button>
            </a>
            <a
              href="https://wa.me/3144352025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-success">
                <FaWhatsapp /> WhatsApp
              </button>
            </a>
            <a
              href="https://www.tiktok.com/@diegorestrepo871"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-danger ">
                <FaTiktok /> TikTok
              </button>
            </a>
          </div>
        </div>
        <div className="local-video">
          <video loop muted autoPlay className="video">
            <source src={video} />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </div>
  )
}

export default ContactDetail
