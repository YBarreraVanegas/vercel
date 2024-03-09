import { Link as RouterLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/leon.png";
import { useState } from "react";
import "../Styles/navbar.css";

function NavbarComponent() {
  const expand = "lg";
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false); // Estado para controlar la visibilidad del Offcanvas

  const handleLinkClick = (target) => {
    const sectionId = target === "inicio" ? "" : target.toLowerCase();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setShowOffcanvas(false); // Cierra el Offcanvas al hacer clic en una sección
    }
  };

  const handleBrandClick = () => {
    navigate("/");
    setTimeout(() => {
      handleLinkClick("home");
    }, 100);
  };

  return (
    <Navbar
      key={expand}
      expand={expand}
      className="bg-secondary mb-3 position-sticky top-0 z-index-sticky
      z-index-1
      flex-nowrap bg-opacity-75 navbar-leon"
    >
      <Container fluid>
        <Navbar.Brand as={RouterLink} to="/" onClick={handleBrandClick}>
          <span className="tex-primary d-flex align-items-center justify-content-start">
            <img src={logo} alt="logo" className="logo" />
            <h6 className="logo-h6">Tres Leones</h6>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={() => setShowOffcanvas(!showOffcanvas)} // Cambia la visibilidad del Offcanvas al hacer clic en el botón de alternancia
        />
        <Navbar.Offcanvas
          show={showOffcanvas} // Controla la visibilidad del Offcanvas
          onHide={() => setShowOffcanvas(false)} // Cierra el Offcanvas al hacer clic fuera de él
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className=" container-nav justify-content-end flex-grow-1 pe-3 ">
              <Nav.Link
                as={RouterLink}
                to="/dashboard"
                onClick={() => handleLinkClick("home")}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                as={RouterLink}
                to="/#about"
                onClick={() => handleLinkClick("about")}
              >
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link
                as={RouterLink}
                to="/#products"
                onClick={() => handleLinkClick("products")}
              >
                Productos
              </Nav.Link>
              <Nav.Link
                as={RouterLink}
                to="/#contact"
                onClick={() => handleLinkClick("contact")}
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
