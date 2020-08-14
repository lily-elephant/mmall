import {get, post} from "@utils/http";

export default class User{
  login(loginInfo){
    return post('/manage/user/login.do', loginInfo)
  }

  getUserList(pageNum){
    return get('/manage/user/list.do', {pageNum: pageNum})
  }

  checkInfo(loginInfo){
    let username = loginInfo.username,
        password = loginInfo.password
    if (typeof username !== 'string' || username.length === 0 ){
      return {
        status: false,
        msg: '用户名不可为空'
      }
    }
    if (typeof password !== 'string' || password.length === 0 ){
      return {
        status: false,
        msg: '密码不可为空'
      }
    }
    return {
      status: true,
      msg: '通过校验'
    }
  }

  logout(){
    return post('/user/logout.do')
  }
}