import React, { Component } from 'react';
import API from '../utils/API';
import SearchForm from '../components/Form';
import FormResults from '../components/FormResults';
import axios from 'axios';
// import Container from '../components/Container';

class SearchPage extends Component {
    state = {
        term: "",
        startDate: "",
        endDate: "",
        results: [],
        error: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    //method for handling form submit
    handleFormSubmit = event => {
        event.preventDefault();
        API.searchDates(this.state)
        .then(res => {
            if (res.data.status === "error") {
            throw new Error(res.data.message);
            }
            this.setState({ results: res.data.response.docs, error: "" });          
        })
        .catch(err => this.setState({ error: err.message }));
    };

    handleArticleSave = event => {
        console.log("EVENT TARGET", event.target);
        console.log("This Result", this.state.results[event.target.id])
        axios.post('/api/articles/saved/' + this.state.results[event.target.id]._id, {
            title: this.state.results[event.target.id].headline.main,
            author: this.state.results[event.target.id].byline.original,
            link: this.state.results[event.target.id].web_url,
            pub_date: this.state.results[event.target.id].pub_date,
            givenId: this.state.results[event.target.id]._id
        })
        .then(function (response) {
        console.log("Object response", response);
        })
        .catch(function (error) {
        console.log(error);
        })
    };


    render() {
        return (
            <div>
                <SearchForm 
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    handleFormClear={this.handleFormClear}
                    articles={this.state.articles}
                />

                <FormResults 
                    results={this.state}
                    handleArticleSave={this.handleArticleSave}
                />
            </div>
        );
    }

}//end of class

export default SearchPage;