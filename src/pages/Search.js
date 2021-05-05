import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import { MDBDataTable } from "mdbreact";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
  }

  //   When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployees()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    API.getEmployees(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({ results: res.data.results });
      })
      .catch((err) => this.setState({ error: err.message }));
  };
  render() {
    // const data = this.state.results
    const stuff = this.state.results;

    // const emp = data.name
    console.log(stuff);
    // console.log(emp)
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Employee Name!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            // handleInputChange={this.handleInputChange}
            // names={this.state.names}
          />
          <MDBDataTable class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>

            {this.state.results.map((result) => (
              <SearchResults
                first={result.name.first}
                last={result.name.last}
                email={result.email}
                image={result.picture.large}
                phone={result.cell}
                dob={result.dob.date}
              />
            ))}
          </MDBDataTable>
        </Container>
      </div>
    );
  }
}

export default Search;
