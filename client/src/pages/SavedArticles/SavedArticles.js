import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import axios from 'axios';
import "./SavedArticles.css";

class SavedArticles extends Component {

    state = {
        saved: []
    }

    //Makes a post to the database and loads in all of the saved articles upon the page load
    componentDidMount() {
        axios.get("/api/articles/saved")
        .then((res) => {
            console.log("All saved articles", res.data);
            let article = res.data;
                this.setState({
                    saved: article
                });
            console.log(this.state.saved);
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
    }

    //Deletes the article entry out of the database
    handleRemoveArticle = event => {

        let index = event.target.id;

        axios.delete("/api/articles/saved/" + this.state.saved[index]._id)
        .then((res) => {
            console.log("Res: ", res);
            this.state.saved.splice(index, 1);
            this.setState({
                saved: this.state.saved
            });
        })
        .catch((err) => {
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
                            <h6 className="card-title">{article.title}</h6>
                            <p className="card-text">{article.snippet}</p>
                            <div className="text-center center-block article-buttons">
                            <a href={article.link}><button className="btn saved-article-view btn-info article-link">Go</button></a> 
                            <button className="btn saved-article-button btn-danger" id={index} onClick={this.handleRemoveArticle}>X</button>
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