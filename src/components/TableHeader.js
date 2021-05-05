import React from "react";

function TableHeader(props){
    return(
  
    <thead>
      <tr>
        <th key="1" scope="col">Image</th>
        <th key="2"scope="col">
          <select
            name="alphabetical"
            onClick={props.onClick}
          ></select>
          <br></br>First Name
        </th>
        <th key="3" scope="col">Last Name</th>
        <th key="4" scope="col">Email</th>
        <th key="5" scope="col">Phone</th>
        <th key="6" scope="col">DOB</th>
      </tr>
    </thead>
    )
}

export default TableHeader;