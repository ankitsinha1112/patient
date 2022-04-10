import React, { Component } from 'react'
import '../App.css';
import { Sidebardata } from './Sidebardata.js';
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      print: true,
    };
  }
  handleprint = () => {
    this.setState({
      print: true
    })
  }
  handleprint1 = () => {
    this.setState({
      print: false
    })
  }
  //   exe =() =>{
  // }

  render() {
    return (
      <div id="main">
        <div className='sidebar'>
          <ul className='sidebarlist'>
            <div className="logo">
              <Avatar>H</Avatar>
              <button className="menu" id="icon" onClick={onclick}>
                <MenuIcon />
              </button>
            </div>
            {Sidebardata.map((val, key) => {
              console.log(this.href);
              return (
                <li key={key} className='row' id={window.location.href === "https://www.patient.tk/#" + (val.link) ? "active" : ""} onClick={() => {
                  (window.location.href = "https://www.patient.tk/#" + (val.link)).then(() =>
                    window.location.reload())
            }}>
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
            <div className='row' id="title">
              <HelpIcon />
              Help
            </div>
          </div>
          <hr />
          <div>
            <Doctor />
          </div>
        </ul>
      </div>
        {
      window.location.href === "https://www.patient.tk/#/person" ?
        (<div>
          <div className='box'>
            <Patient />
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button onClick={() => this.handleprint()}>Upcoming Appointments</Button>
              <Button onClick={() => this.handleprint1()}>Past Appointments</Button>
              <Button onClick={() => this.handleprint1()}>Medical Records</Button>
            </ButtonGroup>
            {
              this.state.print ?
                (<Upcoming />) : (null)
            }
          </div>
        </div>) : null
    }
    {
      window.location.href === "https://www.patient.tk/#/person" ?
        (<div className='box1'>
          <Notes />
          <File />

        </div>) : null
    }
      </div >
  )
  }
}
export default Home