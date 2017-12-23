import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation/Navigation.js';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import Table from './components/Table/Table.js';
import Footer from './components/Footer/Footer.js';

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
        {/* <Header />
        <Navigation /> */}
        <Table />
        <Footer />
      </div>
    );
  }
}

export default App;