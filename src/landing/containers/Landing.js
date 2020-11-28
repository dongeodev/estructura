import React, {Component} from 'react'
import Wrapper from '../components/Wrapper'
import Hero from '../components/hero'
import How from '../components/how'
import Services from '../components/services'
import Footer from '../components/footer'
import Header from '../../header/containers/header'


class Landing extends Component{
  render(){
    return(

      <Wrapper>
      <Header/>
       <Hero/>
       <How/>
       <Services/>
       <Footer/>
      </Wrapper>
    )
  }
}

export default Landing