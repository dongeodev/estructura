import React from 'react'
import design from '../../assets/design.svg'
import welder from '../../assets/welder.svg'
import success from '../../assets/success.svg'

import './how.css'

const How = (props)=>(
  <div className='container-fluid How '>

    <div className='row '>
          <div className='col-12 text-center'>
            <h4 className='card-title pb-2'>Como funciona</h4>
          </div>
    </div>

    <div className=' row How-row card-deck justify-content-center align-items-center'>
      <div className='card col-10 col-md-4 col-lg-3 text-center bg-light '>
            <div className='text-center mt-5'>
              <img src={design} className='icon'/>
            </div>
            <div className='card-body p-0 mb-5'>
              <h5 className='card-title'>Diseño</h5>
              <p className='card-text'>Aterricemos en papel lo que queremos hacer</p>

            </div>
      </div>
      <div className='card col-10 col-md-4 col-lg-3 text-center bg-light'>
          <div className='text-center mt-5'>
            <img src={welder} className='icon'/>
          </div>
          <div className='card-body p-0 mb-5'>
            <h5 className='card-title'>Construccion</h5>
            <p className='card-text'>Sientate y mira como avanza tu proyecto</p>

          </div>
        </div>
      <div className='card col-10 col-md-4 col-lg-3 text-center bg-light'>
          <div className='text-center mt-5'>
            <img src={success} className='icon'/>
          </div>
          <div className='card-body p-0 mb-5'>
            <h5 className='card-title'>Disfruta</h5>
            <p className='card-text'>Recive el proyecto que pediste como lo pediste</p>

          </div>
        </div>
    </div>
 </div>

      



        

   
  
)

export default How