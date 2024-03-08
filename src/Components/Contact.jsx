import { FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa"; // Cambia la importación a 'react-icons/fa'
import "../Styles/Contact.css";
import video from "../assets/video1.mp4";

function Contact() {
  return (
    <div className="container-contact">
      <div className="text-column">
        <h1>Contacto</h1>
        <p className="text-p">
          Si tienes alguna pregunta, comentario o simplemente deseas ponerte en
          contacto con nosotros, no dudes en hacerlo. Estamos aquí para
          ayudarte. Puedes encontrarnos en nuestras redes sociales y plataformas
          de mensajería para obtener respuestas rápidas y mantenernos
          conectados.
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
  );
}

export default Contact;
