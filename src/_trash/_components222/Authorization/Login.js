import React from "react";
import { Link } from "react-router-dom";
// import { Form, FormGroup, FormControl, Col, ControlLabel } from "react-bootstrap";
// import './Authorization.css';
import axios from 'axios';
import FBLogin from './FBLogin';
import GLogin from './GLogin';

class Login extends React.Component{
    constructor (props) {
        super();
    }
    render() {
        return(
            <div>
               <FBLogin />
               <GLogin /> 
            </div>
        );
    }
}
    
export default Login;