import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import logo from "../../images/logo3.png";
import Navbar from "../../components/layout/Navbar";
import './Home.css'

class Home extends Component {
  onLogoutClick = e => {
    this.props.logoutUser(this.props.history);
    window.location.href = "/";
  };

render() {

    const { user } = this.props.auth;

return (
  
    <div>
      <Navbar/>
        {/* Sidebar */}
        <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img src={logo} className="img-responsive" alt=""></img>
            </div>
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">
                      <h5 style={{ fontSize: "16px", fontFamily:  "Nexa Light"}}>
                        <center><b>Admin,</b> {user.name.split(" ")[0]}</center>
                      </h5>
                  </div>
                  <div className="profile-usertitle-status" style={{fontFamily:  "Nexa Light"}}><span className="indicator label-success"></span>Online</div>  
                </div>
              
                <div className="clear"></div>
          </div>
                    <div className="divider" style={{ marginBottom: "20px" }}></div>
                    <form role="search" >
                      <div className="form-group" >
                        <input type="text" className="form-control" placeholder="Search" style={{ marginBottom: "30px", fontFamily: "Nexa Light"}}></input>
                      </div>
                    </form>
                  <ul className="nav menu" style={{fontFamily: "Nexa Light"}}>
                    <li><a href="/dashboard" style={{fontSize: "18px"}}><em className="fa fa-dashboard">&nbsp;&nbsp;&nbsp;&nbsp;</em>Dashboard</a></li>
                    <li className="active"><a href="/home" style={{fontSize: "18px"}}><em className="fa fa-home">&nbsp;&nbsp;&nbsp;&nbsp;</em>Home</a></li>
                    <li><a href="/investor" style={{fontSize: "18px"}}><em className="fa fa-line-chart">&nbsp;&nbsp;&nbsp;</em>Investor Relation</a></li>
                    <li><a href="/members" style={{fontSize: "18px"}}><em className="fa fa-users">&nbsp;&nbsp;&nbsp;</em>Members</a></li>
                    <li><a href="/downloadables" style={{fontSize: "18px"}}><em className="fa fa-download">&nbsp;&nbsp;&nbsp;&nbsp;</em>Downloadables</a></li>
                    <li><a onClick={this.onLogoutClick} href="/" style={{fontSize: "18px"}} ><em className="fa fa-power-off">&nbsp;&nbsp;&nbsp;&nbsp;</em>Logout</a></li>
                  </ul>
        </div>

        {/* breadcrumb */}
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
          <div className="row">
            <ol className="breadcrumb">
              <li><a href="/home">
                <em className="fa fa-home"></em>
              </a></li>
              <li className="active">Home</li>
            </ol>
          </div>
              
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header" style={{fontFamily: "Nexa Bold", color: "#333366"}}>HOME</h1>
            </div>
          </div>
        

              <div className="col-sm-12">
                  <p className="back-link">Lodestar Admin Panel By <a href="/" style={{textDecoration: "none"}}>Minedomain Inc.</a></p>
              </div>
          </div>
        </div>
 
  
    );
  }
}


const mapStateToProps = state => ({
  projects: state.projects,
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(withRouter(Home))
);