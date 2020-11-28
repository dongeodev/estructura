import React from 'react'

import './footer.css'
import logoBlanco from '../../assets/logow.svg'
import linkedin from '../../assets/linkedin.svg'
import Facebook from '../../assets/facebook-logo.svg'
import Instagram from '../../assets/instagram.svg'

const Footer = (props)=>(
  <div className='container-fluid bg-dark text-light'>
    <div className='row Footer pt-4'>
      <div className='col-4 col-md-4 text-center align-self-center'>
        <img src={logoBlanco} alt='logo' className='logow'/>
       
      </div>
      <div className='col-8 col-md-4 text-right'>
        <h6>Quieres trabajar con nosotros?</h6>
        <p>Escribenos</p>
        <h6>Antioquia. Colombia</h6>
      </div>
      <div className='col-12 col-md-4 mt-4 mt-md-0 text-center'>

            
        <div className='row text-center justify-content-center'>
        <div className='col-6 col-md-12'>
            <h5>Contacto</h5>  
            <p className='m-0'>Tel. 3144877407</p>  
        </div>
            <h5 className='col-6 col-md-12 '>Nuestras Redes</h5>
          
          <div className='offset-6 offset-md-0 col-1 col-md-2 p-0  '>
            <img src={linkedin} className='iconf'/>
          </div>
          <div className='col-1 col-md-2 p-0'>
          <img src={Facebook} className='iconf'/>
          </div>
          <div className='col-1 col-md-2 p-0'>
          <img src={Instagram} className='iconf'/>
          </div>

        </div>
      </div>
    </div>
    <div className='col-12 text-center text-light pt-3 pb-3'><p className='font-weight-light m-0'>© 2019 Todos los derechos reservados. Desarrollado por <a>GeoDev</a></p></div>
  </div>
)

export default Footer