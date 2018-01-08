import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import axios from 'axios';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                companyName: 'test',
                address: 'test',
                email: 'test@tes.com',
                phone: 'test',
                contactPerson: 'sdsa',
                role: 1
            },
            submitted: false
        };
        console.log(this.state);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        // console.log([name],value);
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        const filledFields = user.companyName && user.address && user.email && user.phone && user.contactPerson && (user.role != "0") ;
        if (filledFields) {
            // console
            // alert("Submitted");
            axios.post('/api/createUser', user)
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });


            // dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div className={'form-group' + (submitted && !user.companyName ? ' has-error' : '')}>
                        <label htmlFor="companyName">Company name</label>
                        <input type="text" className="form-control" name="companyName" value={user.companyName} onChange={this.handleChange} />
                        {submitted && !user.companyName &&
                            <div className="help-block">Company name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.address ? ' has-error' : '')}>
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" name="address" value={user.address} onChange={this.handleChange} />
                        {submitted && !user.address &&
                            <div className="help-block">Address is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">E-mail is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.phone ? ' has-error' : '')}>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" name="phone" value={user.phone} onChange={this.handleChange} />
                        {submitted && !user.phone &&
                            <div className="help-block">Phone is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.contactPerson ? ' has-error' : '')}>
                        <label htmlFor="contactPerson">Contact person</label>
                        <input type="text" className="form-control" name="contactPerson" value={user.contactPerson} onChange={this.handleChange} />
                        {submitted && !user.contactPerson &&
                            <div className="help-block">Contact person is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && (user.role == "0") ? ' has-error' : '')}>
                    <div className="input-group mb-3">
                    <select name="role" value={user.role} onChange={this.handleChange} className="custom-select" >
                        <option value="0">Choose the role...</option>
                        <option value="1">Broker</option>
                        <option value="2">Dispatch</option>
                    </select>
                    </div>
                    {submitted && (user.role == "0") &&
                            <div className="help-block">Role is required</div>
                        } 
                    </div>                                                        

                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };