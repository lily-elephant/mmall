import React from 'react'
import NavTop from '@components/NavTop'
import NavSide from '@components/NavSide'

const Layout = (props) => {
  return (
    <div>
      <NavTop></NavTop>
      <NavSide></NavSide>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

// class Layout extends React.Component {
//   render(){
//     return (
//       <div>
//         <NavTop></NavTop>
//         <NavSide></NavSide>
//         {this.props.children}
//       </div>
//     )
//   }
// }

export default Layout;