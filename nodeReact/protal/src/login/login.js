import React from 'react'
import ReactDOM from 'react-dom'

import WrappedNormalLoginForm from './form'
// var WrappedNormalLoginForm = require('./form')
require('./login.css');

class Login extends React.Component{
  constructor(props){
    super(props),
    this.state = {
      name :'',
      age : ''
    }
  }
  loginData(data){
    this.setState({name:data.userName})
    this.setState({age:data.password})
  }

  render(){
    return (
      <div className='login' >
        <p>姓名：{this.state.name}</p>
        <p>年龄：{this.state.age}</p>
       <WrappedNormalLoginForm  loginData={this.loginData.bind(this)}/>
      </div>
    )
  }
}

export default Login