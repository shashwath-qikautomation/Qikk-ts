import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./helper/routes";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import MaterialHandling from "./pages/MaterialHandling";
import { SmartStorage } from "./pages/SmartStorage";
import { SmartInventory} from "./pages/SmartInventory";
import Traceability from "./pages/Traceability";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { useState } from "react";




function App() {
  const [hideIcon, setHideIcon] = useState("hidden");
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const onScrollDown = () => {
    setHideIcon("visible");
    if (window.scrollY === 0) {
      setHideIcon("hidden");
    }
  };

  window.addEventListener("scroll", onScrollDown);

  const styleIcon: React.CSSProperties = {
    height: "30px",
    position: "fixed",
    top: "150px",
    marginRight: "80px",
    visibility: hideIcon,
    transition: "0.5s",
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
        style={styleIcon}
        className="d-flex justify-content-end w-100 mx-auto p-4"
      >
        <BiSolidUpArrowCircle
          onClick={scrollToTop}
          style={{
            fontSize: "35px",
            color: "#3498db",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
