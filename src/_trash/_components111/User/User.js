import React, { Component } from 'react';
// import style from './Register.css';


class User extends Component {

  render() {
    return (
      <div className="user-container">
        <div className="user-info">
            <div className="user-email">
                <h3>{this.props.userData.email} ({this.props.userData._id})</h3>
            </div>
            <div className="user-role">
                <p>{this.props.userData.role === 0 ? "Dispatch" : "Broker"}</p>
            </div>
            <div className="user-company">
                <p>{this.props.userData.companyName}</p>
            </div>
            <div className="user-address">
                <p>{this.props.userData.address}</p>
            </div>
            <div className="user-phone">
                <p>{this.props.userData.phone}</p>
            </div>
            <div className="user-name">
                <p>{this.props.userData.name}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default User;