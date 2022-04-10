import React from 'react'
import '../App.css';
import {Sidebardata} from './Sidebardata.js';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function Sidebar() {
  return (
    <div id="main">
    <div className='sidebar'>
      <ul className='sidebarlist'>
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
        </ul>
        </div>
        <div>
           <div>
                <ul>
                  
                </ul>
           </div>
           <div className='box'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                   <Button>Upcoming Appointments</Button>
                   <Button>Post Appointments</Button>
                   <Button>Medical Records</Button>
                  </ButtonGroup>
           </div>
        </div>
      </div>
  )
}

export default Sidebar