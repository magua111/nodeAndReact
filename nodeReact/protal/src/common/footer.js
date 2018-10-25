import React from 'react'
import './footer.css'
class Footer extends React.Component{
  constructor(props){
    super(props),
    this.state = {

    }
  }
  render(){
    return(
      <div className='footer'>
        <footer>
          我是底部
        </footer>
      </div>
    )
  }
}

export default Footer