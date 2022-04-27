import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import "./styles/navbar.css";
import "./styles/slide.css";
import "./styles/footer.css";
import "./styles/main.css";
import "./styles/home.css";
import "./styles/contacto.css";
import "./styles/somos.css";
import "./styles/servicios.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Somos from "./pages/Somos";
import Servicios from "./pages/Servicios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/quienes-somos" component={Somos} />
          <Route exact path="/nuestros-servicios" component={Servicios} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
