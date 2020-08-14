import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';

const data = [
  {label: '首页', pId: 0, id: 1, children: [], path: '/home'},
  {label: '商品', pId: 0, id: 2, children:
    [
      {label: '商品管理', pId: 2, id: 5, children: [], path: '/product'},
      {label: '品类管理', pId: 2, id: 6, children: [], path: '/product-category'},
    ]
  },
  {label: '订单', pId: 0, id: 3, children:
    [{label: '订单管理', pId: 3, id: 7, children: [], path: '/order'}, ]
  },
  {label: '用户', pId: 0, id: 4, children:
    [{label: '用户管理', pId: 4, id: 8, children: [], path: '/consumer'}, ]
  },
]
class NavSide extends React.Component {
  constructor(){
    super()
    this.state = {
      activeIndex: null,
    }
  }
  render(){
    const { activeIndex } = this.state
    return (
      <div className="nav-side">
        <ul className="nav">
          {
            data.map((item,index) => {
              return (
                <li key={item.id}>
                  {
                    item.children.length > 0
                      ? <Fragment>
                        <span onClick={() => this.slideMenu(index)}>{item.label}</span>
                        <ul className="sub-nav" style={activeIndex === index ? {display: 'block'} : {display: 'none'}}>{item.children.map(child => {
                          return <li key={child.id}><NavLink activeClassName="selected" to={child.path}>{child.label}</NavLink></li>
                        })}</ul>
                      </Fragment>
                      : <NavLink activeClassName="selected" to={item.path}>{item.label}</NavLink>
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  slideMenu(index){
    this.setState({
      activeIndex: index
    })
    //点击span控制展开收起
    if (this.state.activeIndex === index){
      this.setState({
        activeIndex: null
      })
    }
  }
}

export default NavSide;