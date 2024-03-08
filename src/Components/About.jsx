import "../Styles/About.css";
import video from "../assets/video.mp4";

function Contact() {
  return (
    <div className="container-about">
      <div className="text-column-about">
        <div className="title-about">
          <h1>Sobre Nosotros</h1>
        </div>
        <p className="text-p">
          Desde nuestra fundación en Bogotá en 2010, Tres Leones ha evolucionado
          como una destacada fábrica de calzado deportivo 100% colombiano. Con
          más de 14 años de experiencia, nos especializamos en crear el estilo
          deseado de la mejor manera posible y con los mejores materiales.
          Nuestra misión es clara: ofrecer productos de la más alta calidad a
          precios competitivos. Respaldados por los mejores artesanos y
          materiales, nos comprometemos a proporcionar calzado duradero y
          cómodo, fusionando la tradición artesanal con la excelencia
          contemporánea. En cada par, reflejamos no solo nuestro compromiso con
          la fabricación de calzado, sino también nuestro orgullo por ser una
          parte integral de la rica herencia colombiana.
        </p>
      </div>
      <div className="local-video-about">
        <video loop muted autoPlay className="video-about">
          <source src={video} />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
}

export default Contact;
