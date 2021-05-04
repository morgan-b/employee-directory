import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.name} className="list-group-item">
         {props.name}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
