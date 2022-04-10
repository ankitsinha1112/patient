import React, { Component } from "react";
import axios from "axios";

class Doctor extends Component {
    state = {
      data: [],
      print:false,
    };
    componentDidMount() {
      axios
        .get("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
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
        // console.log(this.state.data);
      return (
      <div className="doctor">
            <h4>{this.state.data.name}</h4>
            <p>{this.state.data.specification}</p>
        </div>);
    }
  }
  export default Doctor;