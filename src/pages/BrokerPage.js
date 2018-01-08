import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { userActions } from '../actions';

class BrokerPage extends React.Component {

    render() {
        const { authentication } = this.props;
        // console.log('authentication',authentication);
        return (
            <div >
                <Header user={authentication.user}/>
                <p>Some content here</p>
                {/* <Link to="/login">Logout</Link> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedApp = connect(mapStateToProps)(BrokerPage);
export { connectedApp as BrokerPage }; 
