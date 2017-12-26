import React, { Component } from 'react';
// import style from './Register.css';


class User extends Component {

  render() {
    return (
      <div className="user-container">
        <div className="user-info">
            <div className="user-email">
                <h3>{this.props.userData.email}</h3>
            </div>
            <div className="user-role">
                <p>{this.props.userData.role}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default User;