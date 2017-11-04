import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';
import "./SavedArticles.css";

class SavedArticles extends Component {

    state = {
        saved: []
    }

    //Makes a post to the database and loads in all of the saved articles upon the page load
    componentDidMount() {
        //make an axios call to the route /api/artciles/saved
        axios.get("/api/articles/saved")
        .then((res) => {
            console.log("All saved articles", res.data);
            //then we create a temporary variable to hold our articles retrieved from the database
            let article = res.data;
                //the state is then set to the values inside the article variable
                this.setState({
                    saved: article
                });
            //logging to make sure the state is holding values
            console.log(this.state.saved);
        })
        .catch((err) => {
            //if there is an error log it.
            console.log("Error: ", err);
        });
    }

    //Deletes the article entry out of the database
    handleRemoveArticle = event => {
        //set a temporary value equal to the id of the object we are clicking on which was previously set to hold the objects index and store it in a variable called index.
        let index = event.target.id;
        //make an axios delete call to our route /api/articles/saved/:id
        axios.delete("/api/articles/saved/" + this.state.saved[index]._id)
        .then((res) => {
            console.log("Res: ", res);
            //find the article with the corresponding id inside of the states saved array and splice it out of the array (removes it)
            this.state.saved.splice(index, 1);
            //reset the state to the new array that doesnt contain the deleted object
            this.setState({
                saved: this.state.saved
            });
        })
        .catch((err) => {
            //log any arror that occurs.
            console.log("Error: ", err);
        })
    }

    render() {
        return (    
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1 className="text-center">Saved Articles</h1>
                </Col>
            </Row>
            <Row>
                {this.state.saved.map((article, index) => 
                <Col size="md-4" key={article._id}>
                    <div className="card">
                        <div className="card-block">
                        <a className="delete" id={index} onClick={this.handleRemoveArticle}>X</a>
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.snippet}</p>
                            <div className="text-center center-block article-buttons">
                            <a href={article.link}><button className="btn saved-article-view btn-info article-link" target="_blank">Go</button></a> 
                            </div>
                        </div>
                    </div>
                </Col>
                )}
            </Row>
        </Container>
        ) //end of return
    }//end of render


}//end of class

export default SavedArticles;