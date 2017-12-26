import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation/Navigation.js';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import Table from './components/Table/Table.js';
import Footer from './components/Footer/Footer.js';
import Register from './components/Register/Register.js';
import User from './components/User/User.js';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('/api/users')
      .then((response) => {
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        {/* <Header />
        <Navigation />
        <Table />
        <Footer /> */}
        <Register />
       
        { this.state.users.map( (user) => {   return (<User userData={user}/>);  } ) }
        
      </div>
    );
  }
}

export default App;