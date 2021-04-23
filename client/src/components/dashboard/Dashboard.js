import React, { Component } from "react";
import { connect } from "react-redux";
import {  withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";


import "./Dashboard.css";
import Navbar from "../../components/layout/Navbar";
import logo from "../../images/logo3.png";

class Dashboard extends Component {
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
                    <div className="divider" style={{ marginBottom: "20px"}}></div>
                    <form role="search">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" style={{ marginBottom: "30px", fontFamily: "Nexa Light"}}></input>
                      </div>
                    </form>
                    <ul className="nav menu" style={{fontFamily: "Nexa Light"}}>
                      <li className="active"><a href="/dashboard" style={{fontSize: "18px"}}><em className="fa fa-dashboard" >&nbsp;&nbsp;&nbsp;&nbsp;</em>Dashboard</a></li>
                      <li><a href="/home" style={{fontSize: "18px"}}><em className="fa fa-home">&nbsp;&nbsp;&nbsp;&nbsp;</em>Home</a></li>
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
                <li><a href="/dashboard">
                  <em className="fa fa-dashboard"></em>
                </a></li>
                <li className="active">Dashboard</li>
              </ol>
            </div>
                
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header" style={{fontFamily: "Nexa Bold", color: "#333366"}}>DASHBOARD</h1>
              </div>
            </div>
          
                    
            <div className="row">
              <div className="col-md-8">
                <div className="panel panel-default ">
                  <div className="panel-heading" style={{fontFamily: "Lato Bold", color: "#333333"}}>Activity Timeline</div>
                    <div className="panel-body timeline-container" style={{fontFamily: "Lato Regular", color: "#666666"}}>
                      <ul className="timeline">
                        <li >
                          <div className="timeline-badge" style={{backgroundColor: "#333366"}}><em className="fa fa-home"></em></div>
                            <div className="timeline-panel" >
                              <div className="timeline-heading" >
                                <h4 className="timeline-title" >Updated last Tuesday</h4>
                              </div>
                              <div className="timeline-body">
                                <p>Home page was edited last Tuesday by our web developer Juan Dela Cruz</p>
                              </div>
                            </div>
                        </li>
                        <li>
                          <div className="timeline-badge"><em className="fa fa-dashboard"></em></div>
                            <div className="timeline-panel">
                              <div className="timeline-heading">
                                <h4 className="timeline-title">Updated 3 days ago</h4>
                              </div>
                              <div className="timeline-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                            </div>
                        </li>
                        <li>
                          <div className="timeline-badge"><em className="fa fa-users"></em></div>
                            <div className="timeline-panel">
                              <div className="timeline-heading">
                                <h4 className="timeline-title">Updated 3 days ago</h4>
                              </div>
                              <div className="timeline-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at sodales nisl. Donec malesuada orci ornare risus finibus feugiat.</p>
                              </div>
                            </div>
                        </li>
                        <li>
                          <div className="timeline-badge"><em className="fa fa-line-chart"></em></div>
                            <div className="timeline-panel">
                              <div className="timeline-heading">
                                <h4 className="timeline-title">Updated 4 days ago</h4>
                              </div>
                              <div className="timeline-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                            </div>
                        </li>
                      </ul>
                    </div>
                  </div>   
                </div>
                
                <div className="col-md-4">
                  <div className="panel panel-default">
                    <div className="panel-heading"  style={{fontFamily : "Lato Regular", Color: "#333366"}}>Publish Update</div>
                      <div className="panel-body" style={{fontFamily: "Lato Regular", color: "#666666"}}>
                        <div>
                          <button className="btn btn-md btn-info" style={{float: "right"}} >Update</button>	
                        </div>
                        <div >
                          <span><em className="fa fa-eye">&nbsp;</em>Visibility: Public</span>&nbsp;<a href="/" style={{ textDecoration: "underline"}}>edit</a>  
                        </div>
                        <div>
                          <span><em className="fa fa-calendar-check-o">&nbsp;</em>Published: Immediately</span>&nbsp;<a href="/" style={{ textDecoration: "underline"}}>edit</a>
                        </div>
                      </div>
                      <button className="btn btn-md btn-info"  style={{float: "left", marginLeft: "13px", fontFamily: "Lato Regular"}}>Publish</button>
                      <br/>
                      <br/>
                      <br/>
                  </div>
              
                </div>

                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading" style={{fontFamily : "Lato Regular", Color: "#333366"}}><h3>Header List</h3></div>
                          <div className="panel-body">
                            <div style={{fontFamily: "Lato Regular", color: "#666666"}}>
                              <span><em className="fa fa-dashboard">&nbsp;</em>Dashboard</span>&nbsp;  <button className="btn btn-md btn-danger" style={{float:  'right'}}>Remove</button>&nbsp;	<button className="btn btn-md btn-info" style={{float: 'right', marginRight: '1em'}} >Edit </button><br /><br />
                              <span><em className="fa fa-home">&nbsp;</em>Home</span>&nbsp; <button className="btn btn-md btn-danger" style={{float:  'right'}}>Remove</button>&nbsp;	<button className="btn btn-md btn-info" style={{float: 'right', marginRight: '1em'}} >Edit</button><br /><br />
                              <span><em className="fa fa-line-chart">&nbsp;</em>Investor Relation</span>&nbsp; <button className="btn btn-md btn-danger" style={{float:  'right'}} >Remove</button>&nbsp;	<button className="btn btn-md btn-info" style={{float: 'right', marginRight: '1em'}}  >Edit</button><br /><br />
                              <span><em className="fa fa-users">&nbsp;</em>Team</span>&nbsp; <button className="btn btn-md btn-danger" style={{float:  'right'}} >Remove</button>&nbsp;	<button className="btn btn-md btn-info" style={{float: 'right', marginRight: '1em'}} >Edit</button><br /><br />
                              <span><em className="fa fa-download">&nbsp;</em>Downloadables</span>&nbsp; <button className="btn btn-md btn-danger" style={{float:  'right'}}>Remove</button>&nbsp;	<button className="btn btn-md btn-info" style={{float: 'right', marginRight: '1em'}} >Edit</button><br /><br />
                              <br />	
                              <div style={{textAlign:  'left'}}>
                                <button className="btn btn-md btn-info"  >Publish </button> <button className="btn btn-md btn-success" >&nbsp;&nbsp;Add new&nbsp;&nbsp;</button>    
                              </div>
                            </div>
                          </div> 
                    </div>
                </div>
                
                <div className="col-sm-12">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    <p className="back-link">Lodestar Admin Panel By <a href="/" style={{textDecoration: "none"}}>Minedomain Inc.</a></p>
                </div>
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
  )(withRouter(Dashboard))
);