import React from "react";
// import { Form, FormGroup, FormControl, Col, ControlLabel } from "react-bootstrap";
import './Authorization.css';
import Login from "./Login";
import Register from "./Register";

class Authorization extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            authorizationType: <Login/>
        }
    }

    handleClickLogin = () => {
        this.setState({authorizationType: <Login/>});
    }

    handleClickRegister = () => {
        this.setState({authorizationType: <Register/>});
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        {/* <a href="#" className="active" id="login-form-link">Login</a> */}
                                        <p onClick={this.handleClickLogin} id="login-form-link">Login</p>
                                    </div>
                                    <div className="col-xs-6">
                                        {/* <a href="#" id="register-form-link">Register</a> */}
                                        <p onClick={this.handleClickRegister} id="register-form-link">Register</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {this.state.authorizationType}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}
    
export default Authorization;