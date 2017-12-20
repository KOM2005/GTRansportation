import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    message: 'no message',
    message1: 'no message1',
    message2: 'no message2'
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then((response) => {
        console.log(response.data);
        this.setState({ message: <pre>{JSON.stringify(response.data, null, 2)}</pre> });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        {this.state.message2}
      </div>
    );
  }
}

export default App;