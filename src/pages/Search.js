import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

const sortTypes = {
  up: {
    class: "sort-up",
    fn: (a, b) => (a.name.first > b.name.first ? 1 : -1),
  },
  down: {
    class: "sort-down",
    fn: (a, b) => (a.name.first < b.name.first ? 1 : -1),
  },
  default: {
    class: "sort",
    fn: (a, b) => (a.name.first > b.name.first ? 1 : -1),
  },
};
class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
    currentSort: "default",
  };

  //   When the component mounts, get a list of employees
  componentDidMount() {
    API.getEmployees()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    event.preventDefault();

    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  onSortChange = () => {
    const { currentSort } = this.state;
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    this.setState({
      currentSort: nextSort,
    });
  };
  render() {
    const { currentSort } = this.state;
  

    console.log(this.state.results);
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
          />

          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th key="1" scope="col">Image</th>
                <th key="2"scope="col">
                  <select
                    name="alphabetical"
                    onClick={this.onSortChange}
                  ></select>
                  <br></br>First Name{" "}
                </th>
                <th key="3" scope="col">Last Name</th>
                <th key="4" scope="col">Email</th>
                <th key="5" scope="col">Phone</th>
                <th key="6" scope="col">DOB</th>
              </tr>
            </thead>
            {this.state.results
              .filter((results) => {
                if (!this.state.search) {
                  return results;
                } else if (
                  results.name.first
                    .toLowerCase()
                    .includes(this.state.search.toLocaleLowerCase()) ||
                  results.name.last
                    .toLowerCase()
                    .includes(this.state.search.toLocaleLowerCase())
                ) 
                  return results;
                
              })
              .sort(sortTypes[currentSort].fn)
              .map((result) => (
                <SearchResults
                  first={result.name.first}
                  last={result.name.last}
                  email={result.email}
                  image={result.picture.large}
                  phone={result.cell}
                  dob={result.dob.date}
                  key={result.login.uuid}

                />
              ))}
              
          </table>
        </Container>
      </div>
    );
  }
}

export default Search;
