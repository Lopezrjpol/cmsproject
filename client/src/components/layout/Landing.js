import React, { Component } from "react";
import { Link } from "react-router-dom";


import logo from "../../images/logo4.png";

class Landing extends Component {
  render() {
    return (
      
      <div >
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <div >
          <div className="center-align">           
            <img  width="350" height="350" src={logo} alt="lodestarlogo"/> 
                <br/>
                <br/>
              <h4 style={{fontSize: "30px", fontFamily: "Nexa Light"}}>
                Welcome to CMS Admin Panel of Lodestar Website
              </h4>
                <br/>
                <br/>
              <div style={{display:"inline-flex", marginTop: "40px"}}>
              <div>
                <Link
                  to="/register"
                  style={{
                
                    width: "200px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    color: "#FF9933",
                    backgroundColor: "#333366",
                    fontFamily: "Nexa Light"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable accent-3"
                >
                  Register
                </Link>
              </div>
              <br/>
              <div style={{paddingLeft: "100px"}} >
                <Link
                  to="/login"
                  style={{
          
                    width: "200px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    color: "#FF9933",
                    backgroundColor: "#333366",
                    fontFamily: "Nexa Light"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable accent-3"
                >
                  Log In
                </Link>
              </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Landing;