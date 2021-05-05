import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

import TableHeader from "../components/TableHeader";

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
        
            <div className="heading">
          <h1 className="text-center">Employee Directory</h1>
          <h5 className="text-center">Click on the carrot to sort by First Name or search by first or last name to narrow results.</h5>
          </div>
          <Container>

          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
</Container>
<Container>
          <table className="table table-bordered table-responsive-xl">
            <TableHeader onClick={this.onSortChange}></TableHeader>
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
                  dob={result.dob.date.slice(0, 10)}
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
