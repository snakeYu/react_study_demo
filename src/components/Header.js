import React from 'react'

// 把状态组件变为无状态组件
// 无状态组件不需要用户输入操作，数据全靠props传入，不会用到生命周期，所以更加的简单和更加有效率
const Header=(props)=>{
    return (
      <div>
        <header>this is header,{props.headerValue}</header>
      </div>
    )
}

export default Header;