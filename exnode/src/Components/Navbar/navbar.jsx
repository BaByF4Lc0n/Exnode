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
            <a href='/indexPage/Page_home.jsx'>หน้าแรก</a>
          </li>
          <li className="item-navigation">
            <a href='/TransactionPage/Trabnsaction.jsx'>ธุรกรรม</a>
          </li>
          <li className="item-navigation">
            <a href='../AnalystPage/analyst.jsx'>วิเคราะห์</a>
          </li>
          <li className="item-navigation">
            <a href='../SchedulePage/Schedule.jsx'>รายการ</a>
          </li>
          <li className="item-navigation">
            <a href='../ContactPage/Contact.jsx'>ติดต่อ</a>
          </li>
          <li className="item-navigation">
            <a href='../NewsPage/News.jsx'>ข่าวสาร</a>
          </li>
          </ul>
         </div>
        </div>
      </div>
  )
}

export default Navbar
