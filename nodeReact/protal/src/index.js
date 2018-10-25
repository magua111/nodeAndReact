import React from 'react'
import ReactDom from 'react-dom'

// 引入各个模块的组件
import Index from './index/index'
import IndexModel from './IndexModel/IndexModel'
import Login from './login/login'
import chart from './chart/chart'
import {Router, Route, hashHistory,Redirect } from 'react-router'
export default class Root extends React .Component{
  render() {
    return (
      // 这里替换了之前的程序的入口  所以在最后又dom的挂载
      <Router history={hashHistory}>
        <Route component={Index} path='/'>
          <Route component={IndexModel} path='/Index'></Route>
          <Route component={chart} path='/chart'></Route>
        </Route>
        <Route component={Login} path='/login'></Route>
      </Router>
    )
  }
}
ReactDom.render(<Root/>,document.getElementById('root'))