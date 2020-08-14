import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import ProductList from '@pages/product/index';
import CategoryList from '@pages/product/category';

class ProductRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ProductList}/>
        <Route path="/product-category/index/:categoryId?" component={CategoryList}/>
        <Redirect exact from="/product" to="/product/index"/>
        <Redirect exact from="/product-category" to="/product-category/index"/>
      </Switch>
    )
  }
}

export default ProductRouter;