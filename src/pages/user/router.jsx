import React from 'react';
import UserList from '@pages/user/index.jsx';
import {Route, Redirect, Switch} from 'react-router-dom';

class UserRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/consumer/index" component={UserList}/>
        <Redirect exact from="/consumer" to="/consumer/index"/>
      </Switch>
    )
  }
}

export default UserRouter;