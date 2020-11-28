import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import "./building.css";
import casa from "../../assets/casa.png";
import casa0 from "../../assets/bcasa.png";
import casa2 from "../../assets/casa2.jpg";

import edificio1 from "../../assets/edificio1.png";
import edificio2 from "../../assets/edificio2.png";
import edificio3 from "../../assets/edificio3.png";
import edificio4 from "../../assets/edificio3b.png";
import edificio5 from "../../assets/edificio4.png";
import edificio6 from "../../assets/edificio4b.png";
import edificio7 from "../../assets/edificio5.png";

import bodegas1 from "../../assets/bodega1.png";
import bodegas2 from "../../assets/bodegas2.png";

import bodegas4 from "../../assets/bodegas4.png";
import bodegas5 from "../../assets/bodegas5.png";
import bodegas6 from "../../assets/bodegas6.png";
import bodegas7 from "../../assets/bodegas7.png";
import bodegas8 from "../../assets/bodegas8.png";
import bodegas9 from "../../assets/bodegas9.png";
import bodegas10 from "../../assets/bodegas10.png";

import pergola1 from "../../assets/pergola1.png";
import pergola2 from "../../assets/pergola2.png";
import pergola3 from "../../assets/pergola3.png";

import cubierta1 from "../../assets/cubierta1.png";
import cubierta2 from "../../assets/cubierta2.png";
import cubierta3 from "../../assets/cubierta3.png";
import cubierta4 from "../../assets/cubierta4.jpg";
import cubierta5 from "../../assets/cubierta5.jpg";
import cubierta6 from "../../assets/cubierta6.jpg";
import cubierta7 from "../../assets/cubierta7.jpg";

import escalas from "../../assets/escalas.jpg";
import escalas2 from "../../assets/escalas2.png";
import escalas3 from "../../assets/escalas3.jpg";
import escalas4 from "../../assets/escalas4.jpg";
import escalas5 from "../../assets/escalas5.jpg";
import escalas6 from "../../assets/escalas6.jpg";

function Building(props) {
  return (
    <Fragment>
      <div className="parallax-wrapper">
        <h2 className="p-3 title-p bg-dark text-light">Portafolio</h2>
      </div>

      <div className="container-fluid mt-4 p-0 regular-wrapper">
        <div className="row">
          <div className="col-12 col-md-2  alert-dark Build-title pt-3 pb-3 mb-md-5 mb-0">
            <h3 className="m-0 pl-3 git">Edificios</h3>
          </div>
          <div className="col-12 col-md-4 Build-carousel mb-md-5 pl-0 pr-0">
            <Carousel controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={edificio2}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Edificio Metalico</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={edificio1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Edificio Metalico</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={edificio4}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={edificio3}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Edificio La 35</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={edificio6}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Edificio Mixto</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={edificio5}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Edificio Mixto</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={edificio7}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Edificio La 43</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 col-md-2 bg-dark text-light Build-title pt-3 pb-3 mb-md-5 mb-0">
            <h3 className="m-0 pl-3">Casas de Alto Perfil</h3>
          </div>
          <div className="col-12 col-md-4 Build-carousel mb-md-5 pl-0 pr-0">
            <Carousel controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={casa0}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={casa}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={casa2}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 col-md-2 alert-dark Build-title pt-3 pb-3 mb-md-5 mb-0">
            <h3 className="m-0 pl-3">Bodegas</h3>
          </div>
          <div className="col-12 col-md-4 Build-carousel mb-md-5 pl-0 pr-0">
            <Carousel controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={bodegas5}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={bodegas4}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={bodegas1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={bodegas2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={bodegas7}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={bodegas6}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={bodegas8}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Bodega Sabaneta</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={bodegas9}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Bodega San Benito</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={bodegas10}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Bodega San Benito</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 col-md-2 bg-dark text-light Build-title pt-3 pb-3 mb-md-5 mb-0">
            <h3 className="m-0 pl-3 pl-md-0">Pergolas</h3>
          </div>
          <div className="col-12 col-md-4 Build-carousel mb-md-5 pl-0 pr-0">
            <Carousel controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={pergola1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={pergola2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={pergola3}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 col-md-2 alert-dark Build-title pt-3 pb-3 mb-md-5 mb-0">
            <h3 className="m-0 pl-3">Cubiertas</h3>
          </div>
          <div className="col-12 col-md-4 Build-carousel mb-md-5 pl-0 pr-0">
            <Carousel controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={cubierta1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={cubierta2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={cubierta3}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={cubierta4}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={cubierta5}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Bao Hotel Click Clack</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={cubierta6}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={cubierta7}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 col-md-2 bg-dark text-light Build-title pt-3 pb-3 mb-md-5 mb-0">
            <h3 className="m-0 pl-3">Escalas</h3>
          </div>
          <div className="col-12 col-md-4 Build-carousel mb-md-5 pl-0 pr-0">
            <Carousel controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={escalas}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={escalas2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={escalas3}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Hotel Click Clack</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={escalas4}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Hotel Click Clack</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={escalas5}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="alert-link">Restaurante El Trompo</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={escalas6}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      {/* <div className='parallax-wrapper2'></div> */}
    </Fragment>
  );
}

export default Building;
