import React from "react";
import "./services.css";
import bodegas from "../../assets/bodega.png";
import casa from "../../assets/casa.png";
import coliseo from "../../assets/coliseo.png";
import edificio from "../../assets/edificio.png";
import escalas from "../../assets/escalas.png";
import pergola from "../../assets/pergola.png";

function Services(props) {
  return (
    <div className="container-fluid " id="services">
      <div className="row mb-2">
        <div className="col-12 text-center">
          <h4 className="card-title pb-3">Que Hacemos</h4>
        </div>
      </div>
      <div className="row mb-3 bg-light">
        <div className=" col-lg-4 col-md-4 col-4 align-self-center text-center">
          {" "}
          <h3 className="card-title">Casas de Alto Perfil</h3>
        </div>
        <div className="col-lg-5 col-md-8 col-8">
          <img className="img-fluid rounded-lg" src={casa} />
        </div>
      </div>
      <div className="row mb-3">
        <div className=" col-lg-5 col-md-3 col-3 align-self-center text-center">
          {" "}
          <h3 className="card-title">Bodegas</h3>
        </div>
        <div className="col-lg-5 col-md-8 col-8">
          <img className="img-fluid rounded-lg" src={bodegas} />
        </div>
      </div>
      <div className="row mb-3 bg-light">
        <div className=" col-lg-4 col-md-4 col-4 align-self-center text-center">
          {" "}
          <h3 className="card-title">Edificios Metalicos</h3>
        </div>
        <div className="col-lg-5 col-md-8 col-8">
          <img className="img-fluid rounded-lg" src={coliseo} />
        </div>
      </div>
      <div className="row mb-3">
        <div className=" col-lg-5 col-md-3 col-3 align-self-center text-center">
          {" "}
          <h3 className="card-title">Edificios en Concreto</h3>
        </div>
        <div className="col-lg-5 col-md-8 col-8">
          <img className="img-fluid rounded-lg" src={edificio} />
        </div>
      </div>
      <div className="row mb-3 bg-light">
        <div className=" col-lg-4 col-md-4 col-4 align-self-center text-center">
          {" "}
          <h3 className="card-title">Escalas</h3>
        </div>
        <div className="col-lg-5 col-md-8 col-8">
          <img className="img-fluid rounded-lg" src={escalas} />
        </div>
      </div>
      <div className="row mb-3">
        <div className=" col-lg-5 col-md-3 col-3 align-self-center text-center">
          {" "}
          <h3 className="card-title">Pergolas</h3>
        </div>
        <div className="col-lg-5 col-md-8 col-8">
          <img className="img-fluid rounded-lg" src={pergola} />
        </div>
      </div>
    </div>
  );
}
export default Services;
