import About from "../Components/About";
import ContainerCards from "../Components/Cards/ContainerCards";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import BotonWathsapp from "../Components/BotonWathsapp";
import ProductsPage from "../Components/ProductsPage ";
function HomeView() {
  return (
    <div className="containerhomes">
      <div>
        <div id="home">
          <Home />
        </div>
        <div id="products">
          <ContainerCards />
        </div>
        <div id="about">
          <About />
        </div>
        <ProductsPage />
        <div id="contact">
          <Contact />
        </div>
      </div>
      <BotonWathsapp />
    </div>
  );
}

export default HomeView;
