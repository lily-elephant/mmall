import React, {useState, useEffect} from 'react';

// function TableList(props) {
//   const [isFirstLoading, setFirstLoading] = useState(0);
//   // useEffect相当于componentDidMount、componentDidUpdate、componentWillUnmount三个生命周期
//   useEffect(() => {
//     setFirstLoading(false)
//   }, []);
//
//   let tHeader = props.theads.forEach((item, index) => {
//     if(typeof item === 'object'){
//       return <th key={index} width={item.width}>{item.name}</th>
//     }else if (typeof item === 'string'){
//       return <th key={index}>{item}</th>
//     }
//   })
//   //表格内容
//   let listBody = props.children
//   //表格info
//   let listInfo = (
//     <tr>
//       <td colSpan="5" align="center">{isFirstLoading ? '正在努力加载中……' : '没有找到相应的数据**'}</td>
//     </tr>
//   )
//   let tBody = listBody.length > 0 ? listBody : listInfo
//
//   return (
//     <table className="table">
//       <thead>
//       <tr>{tHeader}</tr>
//       </thead>
//       <tbody>
//       {tBody}
//       </tbody>
//     </table>
//   )
// }

const TableList = (props) => {
  //表头
  let tHeader = props.theads.forEach((item, index) => {
    if(typeof item === 'object'){
      return <th key={index} width={item.width}>{item.name}</th>
    }else if (typeof item === 'string'){
      return <th key={index}>{item}</th>
    }
  })
  //表格内容
  let listBody = props.children
  //表格info
  let listInfo = (
    <tr>
      <td colSpan="5" align="center">{props.isFirstLoading ? '正在努力加载中……' : '没有找到相应的数据**'}</td>
    </tr>
  )
  let tBody = listBody.length > 0 ? listBody : listInfo

  return (
    <table className="table">
      <thead>
        <tr>{tHeader}</tr>
      </thead>
      <tbody>
        {tBody}
      </tbody>
    </table>
  )
}

export default TableList;