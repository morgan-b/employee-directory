import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    
     
        <tbody key={props.id}>
             <tr>
          {/* <li  key={props.first} className="list-group-item"> */}
          <td><img src={props.image}></img></td>
          <td key={props.first}>{props.first}</td>
          <td key={props.last}>{props.last}</td>
          <td key={props.email}>{props.email}</td>
          <td key={props.phone}>{props.phone}</td>
          <td key={props.dob}>{props.dob}</td>
          </tr>
        </tbody>


  );
}

export default SearchResults;
