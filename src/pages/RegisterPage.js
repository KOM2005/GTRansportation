import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { domain } from '../helpers/domain';

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                companyName: '',
                address: '',
                email: '',
                phone: '',
                contactPerson: '',
                role: 0
            },
            emailIsUsed: false
        };
    }

    handleBlur = (event) => {
        const { name, value } = event.target;
        const { emailIsUsed } = this.state;
        if (value) {
            axios.get(domain+'/api/users/'+value)
                .then((response) => {
                    response.data ? this.setState({ emailIsUsed: true }) : this.setState({ emailIsUsed: false });
                })
                .catch((error) => {
                    console.log(error);
                });
        }       
    }

    handleChange = (event) => {
        // console.log(this.state);
        const { name, value } = event.target;
        const { user } = this.state;
        // console.log(user);
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.props.history);
        
        const { user, emailIsUsed } = this.state;
        // const { dispatch } = this.props;
        const filledFields = user.companyName && user.address && user.email && user.phone && user.contactPerson && user.role;
        if (filledFields && !emailIsUsed) {
            axios.post(domain+'/api/createUser', user)
              .then((response) => {
                // console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
            this.props.history.push('/login'); 
        }
    }

    render() {
        // const { registering  } = this.props;
        const { user, emailIsUsed } = this.state;
        // console.log(this.state);
        return (
            <div className="col-md-6 col-md-offset-3">

                <h2>Register</h2>

                <form className="was-validated" onSubmit={this.handleSubmit}>


                    <div className="form-group">
                        <label htmlFor="companyName">Company name</label>
                        <input type="text" className={'form-control' + ( !user.companyName ? ' is-invalid' : '')} name="companyName" value={user.companyName} onChange={this.handleChange} />
                        { !user.companyName && 
                            <div className="invalid-feedback">Company name is required</div> 
                        }
                    </div>


                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className={'form-control' + ( !user.address ? ' is-invalid' : '')} name="address" value={user.address} onChange={this.handleChange} />
                        { !user.address &&
                            <div className="invalid-feedback">Address is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" className={'form-control' + ( (!user.email || emailIsUsed) ? ' is-invalid' : '')} name="email" value={user.email} onChange={this.handleChange} onBlur={this.handleBlur}/>
                        {  !user.email &&
                            <div className="invalid-feedback">E-mail is required</div>
                        }
                        { emailIsUsed && <div className="invalid-feedback">E-mail is used</div> }
                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className={'form-control' + ( !user.phone ? ' is-invalid' : '')} name="phone" value={user.phone} onChange={this.handleChange} />
                        { !user.phone &&
                            <div className="invalid-feedback">Phone is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactPerson">Contact person</label>
                        <input type="text" className={'form-control' + ( !user.contactPerson ? ' is-invalid' : '')} name="contactPerson" value={user.contactPerson} onChange={this.handleChange} />
                        { !user.contactPerson &&
                            <div className="invalid-feedback">Contact person is required</div>
                        }
                    </div>


                    <div className="form-group" >
                        <select className="custom-select" required name="role" value={user.role} onChange={this.handleChange} >
                            <option value="">Choose the role...</option>
                            <option value="1">Broker</option>
                            <option value="2">Dispatch</option>
                        </select>
                        { !user.role && <div className="invalid-feedback">Role is required</div> } 
                    </div>                 
                    
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
    
                </form>


               
            </div>
        );
    }
}

// const connectedRegisterPage = connect()(RegisterPage);
// export { connectedRegisterPage as RegisterPage };
export default RegisterPage;