import React from "react";

const Form = () => (

    <div class="container search-wrap">
    <div class="panel panel-default">
      <div class="panel-heading">
        <p><i class="fa fa-list" aria-hidden="true"></i> Search Parameters</p>
      </div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label>Search Term</label>
              <input id="name-input" type="" name="" class="form-control" placeholder="Roosevelt"></input>
            </div>
            <div class="form-group">
              <label>Number of articles</label>
              <select class="form-control dropdown">
                <option>1</option>
                <option>5</option>
                <option>10</option>
              </select>
            </div>
            <div class="form-group">
              <label>Start Year</label>
              <input id="start-year"type="" name="" class="form-control" placeholder="Start Year"></input>
            </div>
            <div class="form-group">
              <label>End Year</label>
              <input id="end-year" type="" name="" class="form-control" placeholder="End Year"></input>
            </div>
              <button type="submit" class="btn search-btn btn-primary"><i class="fa fa-search" aria-hidden="true"></i> Submit</button>
              <button class="btn clear-btn btn-primary"><i class="fa fa-trash" aria-hidden="true"></i> Clear Search</button>
          </form>
        </div>
      </div>
    </div>
);

export default Form;