import React, { Component } from 'react';
import "./Navigation.css";

class Navigation extends Component {

  render() {
    return (
      <div className="navbar">
        <h1>
          <ul>
            <li>
              <a href="/">Clicky game</a>
              </li>
            <li>{this.props.notification}</li>
            <li>Score: {this.props.score} | Top score: {this.props.topScore}</li>
          </ul>
        </h1>
      </div>
    );
  }
}

export default Navigation;
