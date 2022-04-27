import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, useParams, useHistory } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
} from "reactstrap";

function Home() {

    const history = useHistory();

    return (
        <>
            {/*<Slides imagen = {process.env.PUBLIC_URL + '/images/SLIDE7.png'} />*/}
            <Swiper 
                navigation={true} 
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }} 
                modules={[Navigation, Autoplay]} 
                className="mySwiper">
                <SwiperSlide>
                    <div className="slide">
                        <div className = "slide-2">
                            <img src={process.env.PUBLIC_URL + '/images/Slide.png'} className="img-fluid" alt="Responsive"/>
                            <div className ="text-img">
                                <h1>Ofrecemos Servicios</h1>
                                <p>en el ERP JD Edwards XE, 8.xx, 9.0, 9.1</p>
                                <p>y 9.2, así como de desarrollo web</p>
                                <Link to="/nuestros-servicios">
                                    <Button className="slide-button">Ver Servicios <i className="fa fa-chevron-right"/></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <div className = "slide-2">
                            <img src={process.env.PUBLIC_URL + '/images/Slide.png'} className="img-fluid" alt="Responsive"/>
                            <div className ="text-img">
                                <h1>Nuestra Suite Contable</h1>
                                <p>cuenta con los servicios más importantes para</p>
                                <p>la contabilidad electrónica de su empresa.</p>
                                <Link to="/nuestros-servicios">
                                    <Button className="slide-button">Ver Servicios <i className="fa fa-chevron-right"/></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <div className = "slide-2">
                            <img src={process.env.PUBLIC_URL + '/images/Slide.png'} className="img-fluid" alt="Responsive"/>
                            <div className ="text-img">
                                <h1>En Constante Avance</h1>
                                <p>Conforme avanzan las tecnologías</p>
                                <p>se ven sujetas a renovar, reestructurar, redireccionar</p>
                                <Link to="/quienes-somos">
                                    <Button className="slide-button">Conócenos <i className="fa fa-chevron-right"/></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/*<div className = "slide-2">
                <img src={process.env.PUBLIC_URL + '/images/Slide.png'} className="img-fluid" alt="Responsive"/>
                <div className ="text-img">
                    <h1>Garantía en tus manos</h1>
                    <p>Conoce todos los servicios con los</p>
                    <p>que contamos para ti y tu empresa.</p>
                    <Link to="/nuestros-servicios">
                        <Button className="slide-button">Ver Servicios <i className="fa fa-chevron-right"/></Button>
                    </Link>
                </div>
            </div>*/}
            
            <div className="our-services">
                <Row className="justify-content-center">
                    <Col className="col-sm-12 col-md-7 ">
                        <h1 className="our-services-title">Nuestros servicios</h1>
                        <p className="our-services-parrafo">están enfocados al desarrollo, crecimiento y funcionalidad de los tres grandes elementos que constituyen a toda empresa o proyecto:</p>
                    </Col>
                </Row>
                <div className="container">
                    <Row className="justify-content-center">
                        <Col className="col-sm-12 col-md-4 text-center">
                            <img src={process.env.PUBLIC_URL + '/images/tecnologia.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                            <h1 className="our-services-item-t">Tecnología</h1>
                            <p className="our-services-item-p">Consultoría en el sistema JD Edwards – E1, Desarrollos en .NET, JAVA, Desarrollos Web con tecnología React.js / Node.js.</p>
                        </Col>
                        <Col className="col-sm-12 col-md-4 text-center">
                            <img src={process.env.PUBLIC_URL + '/images/proceso.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                            <h1 className="our-services-item-t">Procesos</h1>
                            <p className="our-services-item-p">Apoyo en la definición, documentación y/o redefinición de procesos, buscando siempre que los clientes saquen mayor provecho.</p>
                        </Col>
                        <Col className="col-sm-12 col-md-4 text-center">
                            <img src={process.env.PUBLIC_URL + '/images/personal.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                            <h1 className="our-services-item-t">Personal</h1>
                            <p className="our-services-item-p">Contamos con personal altamente capacitado en cada una de las áreas que manejamos para brindar el mejor servicio.</p>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="avance">
                <div className="container">
                    <div className="row">
                        <div className="col-sm a-izquierda">
                            <img src={process.env.PUBLIC_URL + '/images/avance.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                            <h1>En constante avance</h1>
                            <p>Conforme avanzan las tecnologías y se presentan cambios dentro las organizaciones, éstas se ven sujetas a renovar, reestructurar, redireccionar, implementar y adoptar los cambios que generen mejores resultados de
    manera sostenible.</p>
                            <p>Con la asesoría de GTC las empresas pueden contar con balances robustos y un flujo de efectivo estable que las prepare para aprovechar cada una de las oportunidades que se presenten en sus mercados.</p>
                            <Link className="nav-link active" aria-current="page" to="/quienes-somos">
                                <p className="a-link zoom2">Conoce más sobre nosotros <i className="fa fa-chevron-right"></i></p>
                            </Link>
                        </div>
                        <div className="col-sm">
                            <img src={process.env.PUBLIC_URL + '/images/imagen1.png'} className="img-fluid" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="capacitacion">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img src={process.env.PUBLIC_URL + '/images/imagen2.png'} className="img-fluid" alt="..."/>
                        </div>
                        <div className="col-sm c-derecha">
                            <img src={process.env.PUBLIC_URL + '/images/capacitacion.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                            <h1>Capacitación</h1>
                            <p>Ejecutamos capacitaciones de acuerdo con las necesidades y requerimientos de cada Empresa, haciendo mucho más amigable el proceso de adopción de los módulos a utilizar, mismos que van divididos en las siguientes modalidades:</p>
                            <Row>
                                <Col>
                                    <p><i className="fa fa-check-circle c-1"></i> Capacitación estructurada.</p>
                                    <p><i className="fa fa-check-circle c-2"></i> Capacitación con datos de cliente.</p>
                                    <p><i className="fa fa-check-circle c-3"></i> Talleres.</p>
                                </Col>
                            </Row>
                            <Link className="nav-link active" aria-current="page" to="/nuestros-servicios">
                                <p className="c-link zoom2">Conoce más sobre todos nuestros servicios <i className="fa fa-chevron-right"></i></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="callme">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col className="col-sm-12 col-md-9 ">
                            <h1>Especialistas en soluciones a tu medida – Llámenos 55 8752 9892</h1>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="testimonial">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col className="col-sm-12 col-md-7 ">
                            <h1 className="testimonial-subtitle">Algunos de</h1>
                            <h1 className="testimonial-title">Nuestros Clientes</h1>
                            <p className="testimonial-parrafo">Son Empresas, Pymes y Emprendedores que buscan un servicio profesional especializado con atención personalizada, que contemple sus necesidades y propósitos en forma integral.</p>
                        </Col>
                    </Row>
                    <div className="row">
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/casadiaz.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/crayola.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/kikconsumer.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/bic.png'} className="img-fluid" alt="..." />
                                 </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/itson.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/fandeli.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/dayton.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/lacentral.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/acesa.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/dicipa.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/bajaj.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/omron.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/prestone.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/hillrom.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/inventec.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/megahealth.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/polymex.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/purecircle.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/diestra.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/grupotrevox.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/guala.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/sucroliq.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/cremeria.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/coprobamex.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="clientes">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/welding.png'} className="img-fluid" alt="..." />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <Row className="justify-content-center">
                        <Col className="col-sm-12 col-md-10 ">
                            <Card className="contactanos shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <h1 className="contactanos-subtitle">Creamos el sistema</h1>
                                    <h1 className="contactanos-title">Que su empresa necesita</h1>
                                    <p className="contactanos-parrafo">Contáctenos y reciba un presupuesto a su medida</p>
                                    <Button className="contactanos-button" onClick={() => {history.push(`/contacto/`);}}><i className="fa fa-phone"/> Contáctanos</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>  
    );
}

export default Home;