import React, { useState } from 'react'
import { changeTabActive } from '../redux/action'
import { Connect } from 'react-redux'

function Navbar() {
  alert(changeTabActive)
  const [listNav]=useState(["home","Skills","Projects","Contact"])

  return (
    <header>
      <div className='logo'>
        <img src="/logo.png" alt="logo" />
      </div>
      <nav>
        {
          listNav.map((value,index)=>{
            return <span key={index}>{value}</span>
          })
        }
      </nav>
    </header>
  )
}
const mapStatetoProp=(state)=>({
    activeTab:state.activeTab
})
export default Navbar;

