import React, { Component } from 'react'

import logo from '../../assets/logo4.svg'
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <header>
      <nav className= 'navbar navbar-expand-lg navbar-light bg-light shadow-sm' >
        <Link className="navbar-brand col-1 col-lg-8" to='/'><img src={logo} className='logo'/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav"  >
            <li className="nav-item mr-2">
              <Link className="nav-link disabled" to='/blog' tabIndex="-1" aria-disabled="true" >Blog</Link>
            </li>
            <li className="nav-item mr-2" >
              <Link className="nav-link" to='/services' >Servicios</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to='/portfolio'>Portafolio</Link>
            </li>
          </ul>
        </div>
       
      </nav>
    </header>

    )
  }
}

export default Header