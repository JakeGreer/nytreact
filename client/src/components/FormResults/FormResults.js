import React from "react";
import './FormResults.css';

const FormResults = props => {

     
return <div className="container">

        <div className="row article-section">
            {console.log(props)}
            {props.results.results.map(result => 
                <div key={result._id} className="article col-md-12">
                    <h3 className="article-title">{result.headline.main}</h3>
                    <span className="author">Original: {result.byline.original}</span>
                    <br/>
                    <span className="date">Publish Date: {result.pub_date}</span>
                    <br/>
                    <a className="article-link" href={result.web_url}>View article</a>
                </div>
            )}
        </div>
    </div>
    
};

export default FormResults;