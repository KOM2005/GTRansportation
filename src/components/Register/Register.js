import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Radio } from "react-bootstrap";
import style from './Register.css';


class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      role: 0
      };
    }
    validateForm() {
      return this.state.email.length > 0;
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleNewUserSubmit = event => {
      event.preventDefault();
      console.log(this.state);
    }    

  render() {
    return (
      <div className="Register">
        <form onSubmit={this.handleNewUserSubmit}>
          <FormGroup controlId="email" bsSize="small">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <Radio name="radioGroup" inline>
              Broker
            </Radio>
            <Radio name="radioGroup" inline>
              Dispatcher
            </Radio>          
          </FormGroup>
          <Button
            block
            bsSize="small"
            disabled={!this.validateForm()}
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default Register;