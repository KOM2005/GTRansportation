import React, { Component } from 'react';
import "./Card.css";

class Card extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.updateCards(this.props.card.id);
  }

  render() {
    return (

      <div className="card" onClick={this.handleClick}>
        <div className="img-container">
          <img alt={this.props.card.name} src={this.props.card.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.props.card.name}
            </li>
            <li>
              <strong>Occupation:</strong> {this.props.card.occupation}
            </li>
            <li>
              <strong>Address:</strong> {this.props.card.location}
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

export default Card;