import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    
     
        <tbody>
          {/* <li  key={props.first} className="list-group-item"> */}
          <img src={props.image}></img>
          <td>{props.first}</td>
          <td>{props.last}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.dob}</td>
        </tbody>


  );
}

export default SearchResults;
