import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import './index.css'
class Index extends React.Component{
  constructor(props){
    super(props),
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <Header />
          <div className='container'>
              {this.props.children}
          </div>
        <Footer />
      </div>
    )
  }
}

export default Index