import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import HomePage from '../pages/HomePage';


class PrivateRoute extends React.Component{

    render() {
        // console.log();
        const { user } = this.props;
        console.log('user:', user);
        return (
            !user ? 
                <Redirect to='/login' /> :
                    ( user.role === 1 ? <Redirect to='/broker' /> : <Redirect to='/dispatch' /> )
        )

    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedApp = connect(mapStateToProps)(PrivateRoute);
export { connectedApp as PrivateRoute }; 
