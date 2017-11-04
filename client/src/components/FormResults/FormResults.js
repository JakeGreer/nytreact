import React from "react";
import './FormResults.css';

const FormResults = props => {

     
return <div className="container">

        <div className="row article-section">
            {console.log(props)}
            {props.results.results.map((result, index) => 
                <div key={result._id} className="article col-md-12">
                    <h3 className="article-title">{result.headline.main}</h3>
                    <p className="snippet">{result.snippet}</p>
                    <span className="author">Original: {result.byline.original}</span>
                    <br/>
                    <span className="date">Publish Date: {result.pub_date}</span>
                    <br/>
                    <a href={result.web_url} target="_blank"><button className="btn btn-info article-link">View article</button></a> 
                    <button className="btn btn-success save-link" id={index} onClick={props.handleArticleSave}>Save article</button>
                </div>
            )}
        </div>
    </div>
    
};

export default FormResults;