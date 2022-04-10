import React, { Component } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

class Patient extends Component {
    state = {
        data: [],
        print: false,
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
                <div id="container1">
                    <div id="box1">
                    <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
/>
                        <div className="date bold" >{this.state.data.name}</div>
                        <div>{this.state.data["e-email"]}</div>
                        <div className="wrap">
                            <div >
                                <div>
                                    {this.state.data.Past}
                                </div>
                                <div>
                                    Past
                                </div>
                            </div>
                            <div className="border">
                            </div>
                            <div >
                                <div>
                                    {this.state.data.Upcoming}
                                </div>
                                <div>
                                    Upcoming
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="msg">Send Message</button>
                        </div>
                    </div>
                    <div id="box2">
                    <div className="mount">
                        <Grid>
                        <div>
                            <div className="light">Gender</div>
                            <div className="bold">{this.state.data.Gender}</div>
                        </div>
                        <div>
                            <div className="light">Street Address</div>
                            <div className="bold">{this.state.data["Street Address"]}</div>
                        </div>
                        
                        <div>
                            <div className="light">Member Status</div>
                            <div className="bold">{this.state.data["Member Status"]}</div>
                        </div>
                        </Grid>
                        <Grid>
                        <div>
                            <div className="light">Birthday</div>
                            <div className="bold">{this.state.data.Birthday}</div>
                        </div>
                        <div>
                            <div className="light">City</div>
                            <div className="bold">Cilacap</div>
                        </div>
                        <div>
                            <div className="light">Registered Date</div>
                            <div className="bold">{this.state.data["Register Date"]}</div>
                        </div>
                        </Grid>
                        <Grid>
                        <div>
                            <div className="light">Phone Number</div>
                            <div className="bold">{this.state.data["Phone Number"]}</div>
                        </div>
                        <div>
                            <div className="light">ZIP Code</div>
                            <div className="bold">{this.state.data["ZIP Code"]}</div>
                        </div>
                        </Grid>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
export default Patient;