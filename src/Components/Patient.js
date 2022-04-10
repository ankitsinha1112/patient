import React, { Component } from "react";
import axios from "axios";

class Patient extends Component {
    state = {
      data: [],
      print:false,
    };
    componentDidMount() {
      axios
        .get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
        .then(response => {
          this.successShow(response);
        })
        .catch(error => {
          this.successShow(error);
        });
    }
  
    successShow(response) {
      this.setState({
        data: response.data[0]
      });
    }
  
    render() {
        console.log(this.state.data);
      return (
      <div>
            <div id="container">
              
              
            </div>
        </div>);
    }
  }
  export default Patient;