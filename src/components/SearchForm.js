import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <br></br>
        <input
          value={props.value}
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Type in a name to begin"
          id="search"
        />
    
      </div>
    </form>
  );
}

export default SearchForm;
