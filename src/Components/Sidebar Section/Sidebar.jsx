import React from 'react'
import './sideBar.css'

// Imported Icons ===========>
import {AiOutlinePieChart} from 'react-icons/ai'
import {BsCalendarDate} from 'react-icons/bs'
import {BsFolderSymlink} from 'react-icons/bs'
import {FiBatteryCharging} from 'react-icons/fi'
import {BsChatDots} from 'react-icons/bs'
import {GiComputerFan} from 'react-icons/gi'
import {GoSettings} from 'react-icons/go'
// Imported images ===========>
import img from '../../Assets/logo.png'

const Sidebar = () => {
  return (
    <div className='sideBar'>
      <div className="logoDiv flex">
        <img src={img} alt="Logo Image" />
      </div>
      
      <div className="menu">
        <ul className="navItem">
          <li className="navList">
            <AiOutlinePieChart className="icon"/>
          </li>
          
          <li className="navList">
            <BsCalendarDate className="icon"/>
          </li>
          <li className="navList">
            <BsFolderSymlink className="icon"/>
          </li>
          <li className="navList">
            <FiBatteryCharging className="icon"/>
          </li>
          <li className="navList">
            <BsChatDots className="icon"/>
          </li>
          <li className="navList">
            <GiComputerFan className="icon"/>
          </li>
          <li className="navList">
            <GoSettings className="icon"/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar