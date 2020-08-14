import React from 'react';
import './index.scss';
import User from '@service/user';
import {setStorage} from "@utils/index";

const _user = new User();

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
    }
  }
  onInputChange(e){
    let inputName = e.target.name,
        inputVal = e.target.value
    this.setState({
      [inputName]: inputVal
    })
  }
  onKeyUpChange(e) {
    if (e.keyCode === 13){
      this.submit()
    }
  }
  submit = () => {
    const loginInfo = {
      username: this.state.username,
      password: this.state.password
    }
    const result = _user.checkInfo(loginInfo)
    if (result.status) {
      _user.login(loginInfo).then(res => {
        if (res.data.status === 0){
          setStorage('userInfo', res.data.data)
          this.props.history.push('/')
        }
      })
    }else {
      alert(result.msg)
    }
  }
  componentDidMount(){
    document.title = '登录 - MMALL'
  }
  render(){
    return (
      <div className="login-wrapper">
        <input
          name="username"
          type="text"
          onChange={(e) => this.onInputChange(e)}
          onKeyUp={e => this.onKeyUpChange(e)}
          placeholder="用户名"/>
        <input
          name="password"
          type="password"
          onChange={(e) => this.onInputChange(e)}
          onKeyUp={e => this.onKeyUpChange(e)}
          placeholder="密码"/>
        <button type="button" onClick={this.submit}>登录</button>
      </div>
    )
  }
}

export default Login;