import React from 'react'
import ReactDOM from 'react-dom'
import axios from '../ajax/axios.js'
import { Input , Divider} from 'antd';
const socket = require('socket.io-client')('http://127.0.0.1:1111');
const Search = Input.Search;

require('./chart.css');

class chart extends React.Component{
  constructor(props){
    super(props),
    this.send = this.send.bind(this);
  }
  send(value){
    console.log(value)
    socket.emit('new message', value)
  }

  componentDidMount() {

    // 接受客户端的指令 来执行 login命令还是  new maessage 命令
    socket.on('login', (data) => {
        console.log(data)
    });
    socket.on('add user', (data) => {
        console.log(data)
    });
    socket.on('new message', (data) => {
        console.log(data)
    });
}

  render(){
    return (
      <div className='talk' >
        <Divider><p className='chartTittle'>welcome TYS 聊天室</p></Divider>
        <div className='chartContain'>
          <ul className='ulAll'>
            <li className='l'>
              <img className='headerTop l' src={require('../assate/chart/person1.jpg')} alt="" />
              <p className='neirong l leftp'>: 大家好，我是唐燕山</p>
            </li>

            {/* <li className='r'>
              <img className='headerTop r' src={require('../assate/chart/xw.png')} alt="" />
              <p className='neirong r rightp'>大家好，我是薛伟 : </p>
            </li> */}

            {/* <li className='l'>
              <img className='headerTop l' src={require('../assate/chart/person1.jpg')} alt="" />
              <p className='neirong l leftp'>: 大傻逼  你好</p>
            </li> */}

            {/* <li className='r'>
              <img className='headerTop r' src={require('../assate/chart/xw.png')} alt="" />
              <p className='neirong r rightp'>我好呀 : </p>
            </li> */}


          </ul>



        </div>
        <div className='pushContain'>
        <Search
          placeholder="input that what you want to say"
          enterButton="send"
          size="large"
          onSearch= {this.send}
        />
        </div>
      </div>
    )
  }
}

export default chart