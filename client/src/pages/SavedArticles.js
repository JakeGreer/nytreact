import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import axios from 'axios';

class SavedArticles extends Component {

    state = {
        saved: []
    }

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
        .catch((res) => {
            console.log(res);
        });
    }

    render() {
        return ( <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1 className="text-center">Saved Articles</h1>
                </Col>
            </Row>
            <Row>
                {this.state.saved.map(article => 
                    <Col size="md-12" key={article._id}>
                        <h5>{article.title}</h5>
                        <h6>{article.author}</h6>              
                    </Col>
                )
                }
            </Row>
        </Container>
        ) //end of return
    }//end of render


}//end of class

export default SavedArticles;