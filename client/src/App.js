import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchResults from './components/SearchResults';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchResults />
      </div>
    );
  }
}

export default App;
