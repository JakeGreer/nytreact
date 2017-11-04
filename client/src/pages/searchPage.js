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
        error: "",
        comment: []
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
        console.log("Im here", this.state.results);
        event.preventDefault();
        axios.post('/api/articles/saved/' + this.state.results._id, {
            title: this.state.results[0].headline.main,
            author: this.state.results[0].byline.original,
            pub_date: this.state.results[0].pub_date,
            link: this.state.results[0].web_url
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


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