import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import SearchForm from './components/form/search-form';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <SearchForm />
      </div>
    );
  }
}

export default App;
