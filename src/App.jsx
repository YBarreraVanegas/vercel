import "./App.css";
import Navbar from "./Components/Navbar";

import { Route, Routes } from "react-router-dom";
import HomeView from "./Views/HomeView";
import Dashboard from "./Components/Dashboard";
import ProductDetail from "./Components/ProducDetail/ProductDetail ";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
