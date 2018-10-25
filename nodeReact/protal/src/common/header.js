import React from 'react'
import { Link } from 'react-router'
import './header.css'
class Header extends React.Component{
  constructor(props){
    super(props),
    this.state = {

    }
  }
  render(){
    return(
      <div className='header'>
        <header className='w1200'>
          <img src={require('../assate/index/logo.png')} className='logo'/>
          <Link to={`/index`}>
            <div className='toIndex'>首页</div>
          </Link>
          <Link to={`/chart`}>
            <div className='chart'>聊天室</div>
          </Link>
          <Link to={`/login`}>
            <div className='toLogin'>退出登陆</div>
          </Link>
        </header>
      </div>
    )
  }
}

export default Header