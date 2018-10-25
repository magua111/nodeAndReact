import React from 'react'
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
import './form.css'
import axios from '../ajax/axios.js'
import 'antd/dist/antd.css';

import { hashHistory } from 'react-router'
import QS from 'qs'
const FormItem = Form.Item;
const CreatForm = Form.create;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let _this = this
    console.log(_this)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let num = Math.random()
        let data = QS.stringify(values)
        axios.ajaxPost('/api','/api/user/login',data,_this,function(a,b){
          var code = b.data.code
          if(code == 'E0001' || code == 'E0003'){
            // 服务器错误
            message.error('服务器错误');
          }else if (code == 'E0002'){
            // 用户已经存在
            message.success('登陆成功');
            hashHistory.push('/Index')
          }else{
            // 数据库插入成功
            message.error('用户没有注册');
          }
        })
        this.props.loginData(values)
      }
    });
  }
  onValuesChange (props, changedValues, allValues) {
    console.log(5)
  }
  constructor(props){
    super(props),
    this.state = {
     
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className='canyTitle'>糖果屋的登陆</div>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
        </FormItem>
      </Form>
    );
  }
}(CreatForm()(NormalLoginForm));

export default CreatForm()(NormalLoginForm);