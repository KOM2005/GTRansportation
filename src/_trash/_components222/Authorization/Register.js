import React from "react";
// import { Form, FormGroup, FormControl, Col, ControlLabel } from "react-bootstrap";
// import './Authorization.css';

class Register extends React.Component{
    constructor (props) {
        super();
    }
    render() {
        return(
            <form id="register-form" action="/" method="post" role="form" >
                <div className="form-group">
                    <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" />
                </div>
                <div className="form-group">
                    <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" value="" />
                </div>
                <div className="form-group">
                    <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" value="Register Now" />
                        </div>
                    </div>
                </div>
            </form>           
        );
    }
}
    
export default Register;