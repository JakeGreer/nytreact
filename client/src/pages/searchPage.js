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
        event.preventDefault();
        axios.post('/api/articles/saved', {
            title: "Title",
            pub_date: this.pub_date,
            url: this.web_url
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
                />
            </div>
        );
    }

}//end of class

export default SearchPage;