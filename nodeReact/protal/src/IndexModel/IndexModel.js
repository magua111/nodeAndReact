import React from 'react'
import ReactDOM from 'react-dom'
import axios from '../ajax/axios.js'
import { Link } from 'react-router'
// var WrappedNormalLoginForm = require('./form')
require('./IndexModel.css');

class IndexModel extends React.Component{
  constructor(props){
    super(props),
    this.state = {
     
    }
  }
  

  componentWillMount(){
    // this.getData();
  }

  render(){
    return (
      <div className='IndexModel' >
        <h1>欢迎来到tys聊天系统</h1>
        <Link to={`/chart`}>
            <p className='toChart'>现在就去聊天室</p>
          </Link>
      </div>
    )
  }
}

export default IndexModel