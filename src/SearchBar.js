import React from "react";
/*

  Displays a search bar that can be used to find new books to add to the users collection.

*/

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTerm: "" };
  }

  handleChange(newTerm) {
    this.setState({ currentTerm: newTerm });
    this.props.getSearchResults(this.state.currentTerm);
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search For Books"
          value={this.state.currentTerm}
          onChange={e => this.handleChange(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
