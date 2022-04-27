import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-sm-6 texto-footer">
                            <p className="text-uppercase"><strong>© 2022 Garantía Total en Consultoría Tecnológica Avanzada, S.A. de C.V. </strong></p>
                        </div>
                        <div className="col-sm-6 iconos-footer">
                            <a href="https://www.facebook.com/Garant%C3%ADa-Total-en-Consultor%C3%ADa-Tecnol%C3%B3gica-Avanzada-SA-de-CV-109689040673473" target="_blank">
                                <img src={process.env.PUBLIC_URL + '/images/facebook.png'} className = "zoom iconos-footer-redes" width="30" height="30" alt="..." />
                            </a>
                            <a href="https://instagram.com/gtcgarantiatotal?igshid=YmMyMTA2M2Y=" target="_blank">
                                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} className = "zoom iconos-footer-redes" width="30" height="30" alt="..." />
                            </a>
                            <a href="tel:+525575890477">
                                <img src={process.env.PUBLIC_URL + '/images/llamada.png'} className = "zoom iconos-footer-redes" width="30" height="30" alt="..." />
                            </a>
                            <a href="mailto:contacto@gtcta.mx">
                                <img src={process.env.PUBLIC_URL + '/images/email.png'} className = "zoom iconos-footer-redes" width="30" height="30" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;