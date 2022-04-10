import React from 'react'
import '../App.css';
import {Sidebardata} from './Sidebardata.js';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Upcoming from './Upcoming';
import Patient from './Patient';

import Notes from './Notes';
import File from './File';

import HelpIcon from '@mui/icons-material/Help';
import Doctor from './Doctor';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';


function Home() {
  return (
    <div id="main">
    <div className='sidebar'>
      <ul className='sidebarlist'>
      <div className="logo">
        <Avatar>H</Avatar>
        <button className="menu" id="icon" onClick={onclick}>
          <MenuIcon/>
        </button>
        </div>
      {Sidebardata.map((val,key)=>{
        return(
          <li key={key} className='row' id={window.location.pathname===val.link ?"active" : ""} onClick={()=>{window.location.pathname = val.link}}>
            <div id="icon">
            {val.icon}
            </div>
            <div id="title">
            {val.title}
            </div>
            </li>
          )
        })}
          <div className="help">
          <div className='row' id="icon">
            <HelpIcon/>
          </div>
          <div className='row' id="title">
            Help
          </div>
        </div>
        <hr />
        <div>
        <Doctor/>
        </div>
        </ul>
        </div>
        <div>
           <div className='box'>
                 <Patient/>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                   <Button>Upcoming Appointments</Button>
                   <Button>Past Appointments</Button>
                   <Button>Medical Records</Button>
                  </ButtonGroup>
                   <Upcoming/>
           </div>
          </div>
           <div className='box1'>
                  <Notes/>
                  <File/>

           </div>
      </div>
  )
}

export default Home