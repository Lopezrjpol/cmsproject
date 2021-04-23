import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import logo from "../../images/logo3.png";
import Navbar from "../../components/layout/Navbar";

class Downloadables extends Component {
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
                      <li><a href="/dashboard" style={{fontSize: "18px"}}><em className="fa fa-dashboard">&nbsp;&nbsp;&nbsp;&nbsp;</em>Dashboard</a></li>
                      <li><a href="/home" style={{fontSize: "18px"}}><em className="fa fa-home">&nbsp;&nbsp;&nbsp;&nbsp;</em>Home</a></li>
                      <li><a href="/investor" style={{fontSize: "18px"}}><em className="fa fa-line-chart">&nbsp;&nbsp;&nbsp;</em>Investor Relation</a></li>
                      <li><a href="/members" style={{fontSize: "18px"}}><em className="fa fa-users">&nbsp;&nbsp;&nbsp;</em>Members</a></li>
                      <li className="active"><a href="/downloadables" style={{fontSize: "18px"}}><em className="fa fa-download">&nbsp;&nbsp;&nbsp;&nbsp;</em>Downloadables</a></li>
                      <li><a onClick={this.onLogoutClick} href="/" style={{fontSize: "18px"}} ><em className="fa fa-power-off">&nbsp;&nbsp;&nbsp;&nbsp;</em>Logout</a></li>
                    </ul>
          </div>

          {/* breadcrumb */}
          <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
              <ol className="breadcrumb">
                <li><a href="/downloadables">
                  <em className="fa fa-download"></em>
                </a></li>
                <li className="active">Downloadables</li>
              </ol>
            </div>
                
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header" style={{fontFamily: "Nexa Bold", color: "/333366"}}>DOWNLOADABLES</h1>
              </div>
            </div>
          
                    
            <div className="row">
                      <div className="col-lg-12">
                      </div>
                      <div className="col-lg-8">
                        <div className="panel panel-default">
                          <div className="panel-heading" style={{fontFamily : "Lato Bold", Color: "#333333"}}>Downloadable List</div>
                          <div className="panel-body" style={{fontFamily : "Lato Regular", Color: "#333333"}}  >
                            <div style={{display: "flex"}}>
                              <input className="form-control" style={{marginRight: "10px"}} placeholder="Corporate Disclosure"/>
                              <button className="btn btn-md btn-info" style={{marginRight: "10px"}}>Edit</button>
                              <button className="btn btn-md btn-danger">Remove</button>
                            </div>	
                            <br/>
                            <div style={{display: "flex"}}>
                              <input className="form-control" style={{marginRight: "10px"}} placeholder="Company Disclosure"/>
                              <button className="btn btn-md btn-info" style={{marginRight: "10px"}}>Edit</button>
                              <button className="btn btn-md btn-danger">Remove</button>
                            </div>
                            <br/>
                            <div style={{display: "flex"}}>
                              <input className="form-control" style={{marginRight: "10px"}} placeholder="Others"/>
                              <button className="btn btn-md btn-info" style={{marginRight: "10px"}}>Edit</button>
                              <button className="btn btn-md btn-danger">Remove</button>
                            </div>
                            <br/>
                            <button className="btn btn-md btn-info" style={{float: "left"}} >Add New List</button>	
                          </div>
                          <br/>
                          </div>
                      </div>
                      <div className="col-md-4">
                        <div className="panel panel-default">
                          <div className="panel-heading"  style={{fontFamily : "Lato Bold", Color: "#333333"}}>Publish Update</div>
                            <div className="panel-body" style={{fontFamily: "Lato Regular", color: "#666666"}}>
                              <div>
                                <button className="btn btn-md btn-info" style={{float: "right"}} >Update</button>	
                              </div>
                              <div >
                                <span><em className="fa fa-eye">&nbsp;</em>Visibility: Public</span>&nbsp;<a href="/" style={{ textDecoration: "underline"}}>Edit</a>  
                              </div>
                              <div>
                                <span><em className="fa fa-calendar-check-o">&nbsp;</em>Published: Immediately</span>&nbsp;<a href="/" style={{ textDecoration: "underline"}}>Edit</a>
                              </div>
                            </div>
                            <button className="btn btn-md btn-info"  style={{float: "left", marginLeft: "13px", fontFamily: "Lato Regular"}}>Publish</button>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                        </div>
                       
                
                      </div>
                      
                      <br/>
                    
                    </div>
                    
                    
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="panel panel-default">
                          <div className="panel-heading" style={{fontFamily : "Lato Bold", color: "#FF9933", backgroundColor: "#333366"}}>Corporate Government Panel</div>
                            <div className="panel-body" style={{fontFamily : "Lato Bold", Color: "#333333"}}>
                              <input className="form-control" placeholder="Corporate Government"/>
                                <br/>
                              <div className="container">
                                <div className="table">
                                  <div className="col-4">
                                      <table className="table table-bordered">
                                      <thead>
                                      <tr>
                                      <th scope="col">Download Link</th>
                                      <th scope="col">Content</th>
                                      <th scope="col">classNameification</th>
                                      <th scope="col">Actions</th>
                                      </tr>
                                      </thead>
                                    <tbody>
                                      <tr>
                                      <th scope="row">Founder & Ceo</th>
                                      <td>4u</td>
                                      <td>Peldi</td>
                                      <td>
                                    <div style={{display: "inline-flex"}}>
                                      <button type="button" className="btn btn-info">Edit</button>
                                      <input type="file" className="btn"/>
                                    </div>
                                      </td>
                                      </tr>
                                      <tr>
                                      <th scope="row">Tuttofare</th>
                                      <td>38</td>
                                      <td>Patata</td>
                                      <td>
                                    <div style={{display: "inline-flex"}}>
                                      <button type="button" className="btn btn-info">Edit</button>
                                      <input type="file" className="btn"/>
                                    </div>
                                      </td>
                                      </tr>
                                      <tr>
                                      <th scope="row">Better Half</th>
                                      <td>41</td>
                                      <td>Patata</td>
                                      <td className="row">
                                    <div style={{display: "inline-flex"}}>
                                      <button type="button" className="btn btn-info">Edit</button>
                                      <input type="file" className="btn"/>
                                    </div>
                                      </td>
                                      </tr>
                                    </tbody>
                                    </table>
                                 </div>
                                </div>
                                   <button className="btn btn-md btn-info" style={{float: "left", marginRight: "20px"}}>Add row</button>
                                   <button className="btn btn-md btn-danger" style={{float: "left"}} >Delete row</button>	
                              </div>
                            </div>
                        </div>
                        <div className="col-lg-14">
                                    <div className="panel panel-default">
                                      <div className="panel-heading" style={{fontFamily : "Lato Bold", color: "#FF9933", backgroundColor: "#333366"}}>Company Disclosure Panel</div>
                                        <div className="panel-body" style={{fontFamily : "Lato Bold", Color: "#333333"}}>
                                          <input className="form-control" placeholder="Company Disclosure"/>
                                          <br/>
                                          <div className="container">
                                          <div className="table">
                                            <div className="col-4">
                                            <table className="table table-bordered">
                                              <thead>
                                                <tr>
                                                <th scope="col">Download Link</th>
                                                <th scope="col">Content</th>
                                                <th scope="col">classNameification</th>
                                                <th scope="col">Actions</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                <th scope="row">Founder & Ceo</th>
                                                <td>4u</td>
                                                <td>Peldi</td>
                                                
                                                <td>
                                                  <div style={{display: "inline-flex"}}>
                                                    <button type="button" className="btn btn-info">Edit</button>
                                                    <input type="file" className="btn"/>
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Tuttofare</th>
                                                <td>38</td>
                                                <td>Patata</td>
                                              
                                                <td>
                                                  <div style={{display: "inline-flex"}}>
                                                    <button type="button" className="btn btn-info">Edit</button>
                                                    <input type="file" className="btn"/>
                                                    </div>
                                                </td>
                                                </tr>
                                                
                                                <tr>
                                                <th scope="row">Better Half</th>
                                                <td>41</td>
                                                <td>Patata</td>
                                                <td className="row">
                                                  <div style={{display: "inline-flex"}}>
                                                    <button notextype="button" className="btn btn-info">Edit</button>
                                                    <input type="file" className="btn"/>
                                                    </div>
                                                  
                                                </td>
                                                </tr>
                                              </tbody>
                                              </table>
                                            </div>
                                          </div>
                                            <button className="btn btn-md btn-info" style={{float: "left", marginRight: "20px"}}>Add row</button>
                                            <button className="btn btn-md btn-danger" style={{float: "left"}} >Delete row</button>	
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-14">
                                    <div className="panel">
                                      <div className="panel-heading" style={{fontFamily : "Lato Bold", color: "#FF9933", backgroundColor: "#333366"}}>Others</div>
                                        <div className="panel-body" style={{fontFamily : "Lato Bold", color: "#333333"}}>
                                          <input className="form-control" placeholder="Company Disclosure"/>
                                          <br/>
                                          <div className="container">
                                          <div className="table">
                                            <div className="col-4">
                                            <table className="table table-bordered">
                                              <thead>
                                                <tr>
                                                <th scope="col">Download Link</th>
                                                <th scope="col">Content</th>
                                                <th scope="col">classNameification</th>
                                                <th scope="col">Actions</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                <th scope="row">Founder & Ceo</th>
                                                <td>4u</td>
                                                <td>Peldi</td>
                                                
                                                <td>
                                                  <div style={{display: "inline-flex"}}>
                                                    <button type="button" className="btn btn-info">Edit</button>
                                                    <input type="file" className="btn"/>
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Tuttofare</th>
                                                <td>38</td>
                                                <td>Patata</td>
                                              
                                                <td>
                                                  <div style={{display: "inline-flex"}}>
                                                    <button type="button" className="btn btn-info">Edit</button>
                                                    <input type="file" className="btn"/>
                                                    </div>
                                                </td>
                                                </tr>
                                                
                                                <tr>
                                                <th scope="row">Better Half</th>
                                                <td>41</td>
                                                <td>Patata</td>
                                                <td className="row">
                                                  <div style={{display: "inline-flex"}}>
                                                    <button notextype="button" className="btn btn-info">Edit</button>
                                                    <input type="file" className="btn"/>
                                                    </div>
                                                  
                                                </td>
                                                </tr>
                                              </tbody>
                                              </table>
                                            </div>
                                          </div>
                                            <button className="btn btn-md btn-info" style={{float: "left", marginRight: "20px"}}>Add row</button>
                                            <button className="btn btn-md btn-danger" style={{float: "left"}} >Delete row</button>	
                                      </div>
                                    </div>
                                  </div>
             
             
                
                
                </div>
                </div>
              </div>
            </div>
            
              <div class="col-sm-12">
                <p class="back-link">Lodestar Admin Panel By <a href="/">Minedomain Inc.</a></p>
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
  )(withRouter(Downloadables))
);