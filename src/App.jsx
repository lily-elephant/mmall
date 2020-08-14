import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@pages/home';
import Login from '@pages/login';
import ProductRouter from '@pages/product/router';
import OrderList from '@pages/order/index.jsx';
import UserRouter from '@pages/user/router.jsx';
import ErrorPage from '@pages/error'
import './App.scss';

class App extends Component {
  render(){
    const LayoutRouter = (
        <Layout>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/product" component={ProductRouter}/>
            <Route path="/product-category" component={ProductRouter}/>
            <Route path="/consumer" component={UserRouter}/>
            <Route path="/order/index" component={OrderList}/>
            <Redirect exact from="/order" to="/order/index"/>
            <Redirect exact from="/" to="/home"/>
            <Route component={ErrorPage}/>
          </Switch>
      </Layout>
    )
    return(
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={prop => LayoutRouter}/>
        </Switch>
      </Router>
    )
  }
}

export default App