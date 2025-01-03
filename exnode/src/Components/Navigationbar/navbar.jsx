import React from 'react'
import './navbar.css'
import image_logo_navigation from '../assets/logo_exnode_No-tect.png'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
      <div className='navigation'>
      <div className='container-navigation'>
        <div className='sub-container-navigation'>
          <div className='container-logo-navigation'>
            <img src={image_logo_navigation} alt='logo-inside' id='logo_exnode-navigationbar'></img>
          </div>
          <ul className='menubar'>
          <li className="item-navigation">
            <Link to='/'>หน้าแรก</Link>
          </li>
          <li className="item-navigation">
            <Link to='/Transaction'>ธุรกรรม</Link>
          </li>
          <li className="item-navigation">
            <Link to='/schedule'>วิเคราะห์</Link>
          </li>
          <li className="item-navigation">
            <Link to='/analysis'>รายการ</Link>
          </li>
          <li className="item-navigation">
            <Link to='/contact'>ติดต่อ</Link>
          </li>
          <li className="item-navigation">
            <Link to='/news'>ข่าวสาร</Link>
          </li>
          </ul>
         </div>
        </div>
      </div>
  )
}

export default Navbar
