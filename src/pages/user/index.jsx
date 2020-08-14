import React from 'react';
import User from '@service/user';
import TableList from '@components/TableList'

const _user = new User()

class UserList extends React.Component {
  constructor(){
    super()
    this.state = {
      pageNum: 1,
      list: [],
      isFirstLoading: true
    }
  }
  loadUserList(){
    _user.getUserList(this.state.pageNum).then(res => {
      if (res.data.status === 0){
        this.setState(res.data.data, () => {
          this.setState({
            isFirstLoading: false
          })
        })
      }
    })
  }
  componentDidMount(){
    this.loadUserList()
  }
  render() {
    return (
      <div>
        <TableList isFirstLoading={this.state.isFirstLoading} className="table" theads={['ID', '用户名', '邮箱', '电话', '注册时间']}>
          {
            this.state.list.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{new Date(item.createTime).toLocaleString()}</td>
                </tr>
              )
            })
          }
        </TableList>
      </div>
    )
  }
}

export default UserList;