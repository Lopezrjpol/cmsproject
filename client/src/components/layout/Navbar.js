import React, { Component } from "react";

import "./Navbar.css";


class Navbar extends Component {
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
		      <div className="container-fluid">
			      <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/sidebar-collapse"><span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span></button>
				      <a className="navbar-brand" href="/dashboard" style={{fontFamily: "Nexa Bold"}}><span style={{fontFamily: "Nexa Bold"}}>Lodestar </span>Admin</a>
            </div>
          </div>
        </nav>
      </div>
      
    );
  }
}
export default Navbar;