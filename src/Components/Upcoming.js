import React, { Component } from "react";
import axios from "axios";
import ArticleIcon from '@mui/icons-material/Article';

class Upcoming extends Component {
    state = {
      data: [],
      print:false,
    };
    componentDidMount() {
      axios
        .get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
        .then(response => {
          this.successShow(response);
        })
        .catch(error => {
          this.successShow(error);
        });
    }
  
    successShow(response) {
      this.setState({
        data: response.data[0]['Upcoming Appointments']
      });
    }
  
    render() {
        console.log(this.state.data);
      return (
      <div>
            <div id="container">
              <div>
                <div className="date">{this.state.data.Date}</div>
                <div className="light">{this.state.data.Time}</div>
              </div>
              <div>
                <div className="light">Treatment</div>
                <div className="bold">{this.state.data.Treatment}</div>
              </div>
              <div>
                <div className="light">Dentist</div>
                <div className="bold">{this.state.data.Dentist}</div>
              </div>
              <div>
                <div className="light">Nurse</div>
                <div className="bold">{this.state.data.Nurse}</div>
              </div>
              <div>
                <div >
                  < ArticleIcon />
                  <a href="{this.state.data.doc}">Note</a>
                </div>
              </div>
              
            </div>
        </div>);
    }
  }
  export default Upcoming;