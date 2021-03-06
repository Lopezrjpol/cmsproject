import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
render() {
    const { errors } = this.state;
return (
    <div>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
  
      <div className="container">
        <div style={{ marginTop: "2rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect" style={{fontFamily: "Nexa Light", textDecoration: "none"}}>
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ fontSize: "18px", paddingLeft: "11.250px", fontFamily: "Nexa Light", marginBottom: "10px" }}>
              <h2>
                <b>Login to Admin Panel</b> 
              </h2>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register" style={{color: "#FF9933"}}>Register</Link>
              </p>
            </div>
            
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12" style={{marginBottom: "30px"}} >
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email" style={{fontSize: "15px"}}>Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.inputincorrect
                  })}
                />
                <label htmlFor="password" style={{fontSize: "15px"}}>Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.inputincorrect}
                </span>
              </div>
         
              <div className="col s12" style={{ marginTop: "20px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    color: "#FF9933",
                    backgroundColor: "#333366",
                    fontFamily: "Nexa Light"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);