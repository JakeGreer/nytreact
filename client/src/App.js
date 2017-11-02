import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SearchForm from './components/Form';
import SearchResults from './pages/searchPage';


const App = () => 

<Router>
  <div>
    <Navbar />
    <Header />
    <SearchResults />
    <Route exact path='/search' component={SearchResults} />
  </div>
</Router>


export default App;
