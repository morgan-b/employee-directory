import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee_name">Employee Name:</label>
        <input
          value={props.search}
        //   onChange={props.handleInputChange}
          name="name.first"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a name to begin"
          id="name"
        />
    
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
