import React, { Component } from "react";
import axios from "axios";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

class File extends Component {
    state = {
      data: [],
      print:false,
    };
    componentDidMount() {
      axios
        .get("https://619f39821ac52a0017ba467e.mockapi.io/Files")
        .then(response => {
          this.successShow(response);
        })
        .catch(error => {
          this.successShow(error);
        });
    }
  
    successShow(response) {
      this.setState({
        data: response.data[0]['files']
      });
    }
  
    render() {
        console.log(this.state.data[0]);
      return (
      <div>
            <div id="container3">
              <div className="wrap">
                  <div>
                      Files/Documents
                  </div>
                <div >
                  <a href="#">
                      <div id="nowrap">
                      <div>
                      < InsertDriveFileIcon />
                      </div>
                      <div>
                      Add Files
                      </div>
                      </div>
                       </a>
                </div>
              </div>
              <div>
              <a href="{this.state.data[0]}"> <div id="nowrap">
                      <div>
                      < InsertDriveFileIcon />
                      </div> <div>Check Up Result.pdf </div>
                      </div></a>
              </div>
              <div>
              <a href="{this.state.data[1]}"> <div id="nowrap">
                      <div>
                      < InsertDriveFileIcon />
                      </div> <div> Dental X-Ray Result 2.pdf</div>
                      </div></a>
              </div>
              <div>
              <a href="{this.state.data[2]}"> <div id="nowrap">
                      <div>
                      < InsertDriveFileIcon />
                      </div> <div> Medical Prescriptions.pdf</div>
                      </div></a>
              </div>
              
              
            </div>
        </div>);
    }
  }
  export default File;