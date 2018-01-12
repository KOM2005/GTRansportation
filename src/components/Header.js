import React from 'react';
import { connect } from 'react-redux';



class Header1 extends React.Component{

    render() {
        // console.log();
        const { user } = this.props;
        // console.log('user:', user);
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">{user.role === 1 ? 'Broker' : 'Dispatch'}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a> */}
                        <a className="nav-item nav-link" href="#">{user.email}</a>
                        <a className="nav-item nav-link" href="/login">Logout</a>
                        
                        {/* <a className="nav-item nav-link disabled" href="#">Disabled</a> */}
                    </div>
                </div>
            </nav>
        )

    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const Header = connect(mapStateToProps)(Header1);
// export { connectedApp as PrivateRoute };
export default Header;
