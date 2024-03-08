import { Link } from "react-router-dom";
import "../Styles/botonwath.css";
import social from "../assets/social.png";

const BotonWathsapp = () => {
  return (
    <>
      <div className="boton">
        <Link to="https://wa.me/3144352025" target="_blank">
          <img src={social} alt="social" className="img-social" />
        </Link>
      </div>
    </>
  );
};

export default BotonWathsapp;
