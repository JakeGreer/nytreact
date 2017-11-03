import React from "react";
import './Form.css';

const Form = props => (

    <div className="container search-wrap">
    <div className="panel panel-default">
      <div className="panel-heading">
      </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Search Term</label>
              <input id="name-input" type="text" name="term" className="form-control" placeholder="Roosevelt" value={props.term} onChange={props.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label>Start Year</label>
              <input id="start-date"type="date" name="startDate" className="form-control" placeholder="Start Year" onChange={props.handleInputChange} value={props.startDate}></input>
            </div>
            <div className="form-group">
              <label>End Year</label>
              <input id="end-date" type="date" name="endDate" className="form-control" placeholder="End Year" onChange={props.handleInputChange} value={props.endDate}></input>
            </div>
              <button type="submit" className="btn search-btn btn-primary" onClick={props.handleFormSubmit} href="/articles">Submit</button>
              <button className="btn clear-btn btn-primary" onClick={props.handleFormClear}>Clear Search</button>
          </form>
        </div>
      </div>
    </div>
);

export default Form;