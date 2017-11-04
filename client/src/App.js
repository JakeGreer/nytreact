import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import SearchForm from './components/Form';
import SearchResults from './pages/searchPage';
import Saved from './pages/SavedArticles';
import { Container} from "./components/Grid";


const App = () => 

<Router>
  <Container>
    <Navbar />
    <Jumbotron />
    <Route exact path="/" component={SearchResults} />
    <Route exact path="/saved" component={Saved} />
  </Container>
</Router>


export default App;
