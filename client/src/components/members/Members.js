import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import logo from "../../images/logo3.png";
import Navbar from "../../components/layout/Navbar";

class Members extends Component {
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
                      <li className="active"><a href="/members" style={{fontSize: "18px"}}><em className="fa fa-users">&nbsp;&nbsp;&nbsp;</em>Members</a></li>
                      <li><a href="/downloadables" style={{fontSize: "18px"}}><em className="fa fa-download">&nbsp;&nbsp;&nbsp;&nbsp;</em>Downloadables</a></li>
                      <li><a onClick={this.onLogoutClick} href="/" style={{fontSize: "18px"}} ><em className="fa fa-power-off">&nbsp;&nbsp;&nbsp;&nbsp;</em>Logout</a></li>
                    </ul>
          </div>

          {/* breadcrumb */}
          <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
              <ol className="breadcrumb">
                <li><a href="/members">
                  <em className="fa fa-users"></em>
                </a></li>
                <li className="active">Members</li>
              </ol>
            </div>
                
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header" style={{fontFamily: "Nexa Bold", color: "#333366"}}>MEMBERS</h1>
              </div>
            </div>
          
            <div class="row">
			<div class="col-lg-8">
				<div class="panel panel-default">
					<div class="panel-heading"  style={{fontFamily : "Lato Regular", color: "#333366"}}>Add New Member Form</div>
					<div class="panel-body"  style={{fontFamily: "Lato Regular", color: "#666666"}}>
					<label for="ClassMember">Class Member:</label>
						<select name="cars" id="cars">
							<option value="RegularDirector">Regular Director</option>
							<option value="IndependentDirector">Independent Director</option>
							<option value="ExecutiveDirector">Executive Director</option>
						</select>
						<div class="form-group">
									<label>Add Photo</label>
									<input type="file"/>
									
								</div>
								
								<div class="form-group">
									<label>Member Name</label>
									<input class="form-control" />
							
							
								<div class="form-group">
                <label>Business Background</label>
									<input class="form-control" />
								<div class="form-group">
                <label>Academic Background</label>
									<input class="form-control" />
								<div class="form-group">
							
                <label>Committee Membership</label>
									<input class="form-control" />
				
								<div class="form-group">
						    <label>Directorship in other</label>
									<input class="form-control" />
				
								</div>
								</div>
								<button class="btn btn-md btn-success" style={{float: "left"}}>Add Member</button>	
								</div>

								</div>
					</div>
          </div>
				
					
				</div>
			</div>
			<div class="col-md-4">
				<div class="panel panel-default">
				<div className="panel-heading"  style={{fontFamily : "Lato Regular", color: "#333366"}}>Publish Update</div>
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
			
				<br/>
				
			</div>
			
			</div>
				
      <div className="row">
                      <div className="col-lg-12">
                        <div className="panel panel-default">
                          <div className="panel-heading" style={{fontFamily : "Lato Bold", color: "#FF9933", backgroundColor: "#333366"}}>Member List</div>
                            <div className="panel-body" style={{fontFamily: "Lato Regular", color: "#333333"}}>
                              <div className="container">
                                <div className="table">
                                  <div className="col-4">
                                      <table className="table table-bordered">
                                      <thead>
                                      <tr>
                                      <th scope="col">Name</th>
                                      <th scope="col">Classification</th>
                                      <th scope="col">Member Class</th>
                                      <th scope="col">Business BG</th>
                                      <th scope="col">Acad BG</th>
                                      <th scope="col">Com Membership</th>
                                      <th scope="col">Director in other</th>
                                      <th scope="col">Actions</th>
                                      </tr>
                                      </thead>
                                    <tbody>
                                      <tr>
                                      <th scope="row">Founder & Ceo</th>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td>
                                    <div style={{display: "inline-flex"}}>
                                      <button type="button" className="btn btn-info">Edit</button>
                     
                                    </div>
                                      </td>
                                      </tr>
                                      <tr>
                                      <th scope="row">Tuttofare</th>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td>
                                    <div style={{display: "inline-flex"}}>
                                      <button type="button" className="btn btn-info">Edit</button>
    
                                    </div>
                                      </td>
                                      </tr>
                                      <tr>
                                      <th scope="row">Better Half</th>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td className="row">
                                    <div style={{display: "inline-flex"}}>
                                      <button type="button" className="btn btn-info">Edit</button>
                                      
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
	

                <div className="col-sm-12">
                    <p className="back-link">Lodestar Admin Panel By <a href="/"  style={{textDecoration: "none"}}>Minedomain Inc.</a></p>
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
  )(withRouter(Members))
);