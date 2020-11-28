import React from "react";
import "./hero.css";

const Hero = props => (
  <div className="Hero container-fluid">
    <div className="row ">
      <div className="col-lg-6 offset-lg-1 col-md-10 offset-md-1 col-10 offset-1 title pl-md-5 text-light ">
        <h1 className="pt-3 mb-0 ">
          Somos mas que montajes estructurales
        </h1>
        {/* <h1 className=''></h1> */}
        {/* <h6 className='pt-5'>- Somos mas que montajes estructurales</h6> */}
        <h6 className="pt-2">
          - Cero estres "Te asesoramos en lo que necesites" Gratis!
        </h6>
        <h6 className="pt-2">- Excelentes precios</h6>
      </div>
      <div className="col-lg-3 offset-lg-1 col-md-6 offset-md-3">
        <div className="formulario card mb-5">
          <form>
            <div className="form-group ">
              <label htmlFor="exampleInputEmail1">
                Direccion de Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group ">
              <label htmlFor="exampleInputPassword1">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Telefono"
              />
              <small id="emailHelp" className="form-text text-muted">
                Acepto Politicas de Privacidad de Datos
              </small>
            </div>

            <button
              type="submit"
              className="btn btn-primary text-center w-100"
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
            >
              Contactanos
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
