import React, {Component} from 'react'
import Wrapper from '../../landing/components/Wrapper'
import Building from '../component/building'
import Footer from '../../landing/components/footer'
import Header from '../../header/containers/header'



class Portfolio extends Component{
  render(){
    return(
      <Wrapper>
        <Header/>
        <Building/>
        <Footer/>
      </Wrapper>
    )
  }
}

export default Portfolio