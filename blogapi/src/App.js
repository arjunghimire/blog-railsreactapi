import React, { Component } from 'react';
import './App.css';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div>
       <h1> All Post </h1>
       <Post />              
      </div>
    );
  }
}

export default App;
