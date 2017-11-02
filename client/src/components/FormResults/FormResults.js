import React from "react";
import './FormResults.css';

const FormResults = props => {

     
return <div className="container">
        <div className="row">
            {console.log(props)}
            {props.results.results.map(result => 
                <div key={result.id} className="article col-md-12">
                    <h1 className="article-title">{result.headline.main}</h1>
                </div>
            )}
        </div>
    </div>
    
};

export default FormResults;