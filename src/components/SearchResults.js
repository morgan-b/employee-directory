import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    <tbody>
      <tr>
        <td>
          <img key={props.image} alt="employee_image" src={props.image}></img>
        </td>
        <td>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.dob}</td>
      </tr>
    </tbody>
  );
}

export default SearchResults;
