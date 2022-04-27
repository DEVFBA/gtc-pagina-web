import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 56 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    },[])

    let navbarClasses=["navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"];
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    return (
       <div>
            <nav className = {navbarClasses.join(" ")}>
                <Link className="navbar-brand logo" aria-current="page" to="/">
                        <img src={process.env.PUBLIC_URL + '/images/gtc-logo.png'} width="190" height="75" alt="GTC" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link active" aria-current="page" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/quienes-somos">
                            QUIENES SOMOS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/nuestros-servicios">
                            SERVICIOS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contacto">
                            CONTACTO
                        </Link>
                    </li>
                </ul>
                <div className="row actions2 justify-content-center" >
                    <div className="col-sm nav-link active iconos">
                    </div>
                    <div className="col-sm nav-link active iconos">
                        <a href="https://www.facebook.com/Garant%C3%ADa-Total-en-Consultor%C3%ADa-Tecnol%C3%B3gica-Avanzada-SA-de-CV-109689040673473" target="_blank">
                            <img src={process.env.PUBLIC_URL + '/images/facebook.png'} className = "zoom" width="30" height="30" alt="..." />
                        </a>
                    </div>
                    <div className="col-sm nav-link active iconos">
                        <a href="https://instagram.com/gtcgarantiatotal?igshid=YmMyMTA2M2Y=" target="_blank">
                            <img src={process.env.PUBLIC_URL + '/images/instagram.png'} className = "zoom" width="30" height="30" alt="..." />
                        </a>
                    </div>
                    <div className="col-sm nav-link active iconos">
                        <a href="tel:+525575890477">
                            <img src={process.env.PUBLIC_URL + '/images/llamada.png'} className = "zoom" width="30" height="30" alt="..." />
                        </a>
                    </div>
                    <div className="col-sm nav-link active iconos">
                        <a href="mailto:contacto@gtcta.mx">
                            <img src={process.env.PUBLIC_URL + '/images/email.png'} className = "zoom" width="30" height="30" alt="..." />
                        </a>
                    </div>
                    <div className="col-sm nav-link active iconos">
                    </div>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;