import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import User from '@service/user'
import {removeStorage, getStorage} from "@utils/index";

const _user = new User()

class NavTop extends React.Component {
  constructor(){
    super()
    this.state = {
      userInfo: JSON.parse(getStorage('userInfo'))
    }
  }
  quit = () => {
    _user.logout().then(() => {
      removeStorage('userInfo')
      window.location.href = '/login'
    })
  }
  render(){
    const {userInfo} = this.state
    return (
      <div className="header">
        <Link to="/" className="logo">HAPPY <b>MMALL</b></Link>
        <div className="info">
          {userInfo ? <span>欢迎，{userInfo.username || ''}</span> : <span>欢迎</span>}
          <div className="quit" onClick={this.quit}>退出登录</div>
        </div>
      </div>
    )
  }
}

export default NavTop;