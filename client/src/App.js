import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Favourites from './components/Favourites';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchResults />
          <Favourites />
        </main>
      </div>
    );
  }
}

export default App;
