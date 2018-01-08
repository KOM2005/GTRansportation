import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// import history from './helpers/history';
// import { alertActions } from './_actions';
import { PrivateRoute } from './components/PrivateRoute';
// import HomePage from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { BrokerPage}  from './pages/BrokerPage';
import { DispatchPage } from './pages/DispatchPage';

class App extends React.Component {

    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path="/" component={PrivateRoute} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/broker" component={BrokerPage} />
                    <Route exact path="/dispatch" component={DispatchPage} />
                </Switch>
            </Router>
        );
    }
}


const connectedApp = connect()(App);
export { connectedApp as App }; 