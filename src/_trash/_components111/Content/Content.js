import React, { Component } from 'react';
import cards from '../../cards.json';
import Card from '../Card/Card.js';
import "./Content.css";


class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: this.shuffleCards(cards),
            guessed: []
        }
        this.updateState = this.updateState.bind(this);
         
    }

    updateState(id){
        let temp = this.state.guessed.slice();
        this.isInGuessed(id, this.state.guessed) ? temp = [] :temp.push(id);
        this.props.updateResults(temp.length);
        this.setState( {data: this.shuffleCards(cards), guessed: temp} )
    }

    shuffleCards(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

    isInGuessed(value, array) {
        return array.indexOf(value) > -1;
    }

    render() {
        return (
        <div className="main">
            {this.state.data.map( (component, i) =>  <Card updateCards={this.updateState} key={i} card={component}/>  )}
        </div>
        );
    }
}


export default Content;