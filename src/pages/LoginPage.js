import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { OldSocialLogin as SocialLogin } from 'react-social-login'

import { userActions } from '../actions';
import styles from './styles/socialButtons.css';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        // reset login status
        this.props.dispatch(userActions.logout());
        this.props.dispatch(userActions.register());
    }

    responseSocial = (response) => {

        const { dispatch } = this.props;
        if (response._profile.email) {
            axios.get('http://localhost:3001/api/'+response._profile.email)
            .then((response) => {
                if (response.data) {
                    dispatch(userActions.login(response.data));
                    this.props.history.push('/');
                } else {dispatch(userActions.unregister());}
            })
            .catch((error) => {
                console.log(error);
            });
        } 
       
    }


 
    render() {
        
        const { isRegistered } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <div>
                    <div className="social-button">
                        <SocialLogin
                            provider='facebook'
                            appId='464414910621154'
                            callback={this.responseSocial}
                            >
                            <button>Login with Facebook</button>
                        </SocialLogin>
                    </div>
                    <div className="social-button">
                        <SocialLogin
                            provider='google'
                            appId='131009126163-vff7pkdrdmojft7cbdvcced4e5ohk0t4.apps.googleusercontent.com'
                            callback={this.responseSocial}
                            >
                            <button>Login with Google</button>
                        </SocialLogin>
                    </div>
                </div >
                <div className={'form-group' + (!isRegistered ? ' has-error' : '')}>
                    { !isRegistered && <div className="help-block">User is not registered</div> }
                </div>
                <div>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { isRegistered } = state.registration;
    return {
        isRegistered
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 