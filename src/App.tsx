import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { routes } from "./helper/routes";
import { HomePage } from './pages/HomePage';
import About from './pages/About';
import Contact  from './pages/Contact';
import { Blog } from './pages/Blog';
import Gallery from './pages/Gallery';
import { NavBar } from './components/NavBar';
import { MaterialHandling } from "./pages/MaterialHandling";
import { SmartStorage } from "./pages/SmartStorage";
import { SmartInventory } from "./pages/SmartInventory";
import { Traceability } from "./pages/Traceability";
import Footer from './components/Footer';
import { FaArrowCircleUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={routes.homePage} element={<HomePage />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.blog} element={<Blog />} />
        <Route path={routes.gallery} element={<Gallery />} />
        <Route path={routes.materialHandling} element={<MaterialHandling />} />
        <Route path={routes.smartStorage} element={<SmartStorage />} />
        <Route path={routes.smartInventory} element={<SmartInventory />} />
        <Route path={routes.traceability} element={<Traceability />} />
      </Routes>
      <div
        style={{ height: "30px", position: "relative", bottom: "25px" }}
        className="d-flex justify-content-end w-75 mx-auto"
      >
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ fontSize: "35px", color: "#3498db" }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
