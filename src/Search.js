import React from "react";
import SearchBar from "./SearchBar.js";
import { search } from "./BooksAPI.js";
import SearchResults from "./SearchResults.js";
import { Link } from "react-router-dom";
import sortBy from 'sort-by';

/*

Contains components to search the general collection for new books, and display search results.
These books can be added to the personal collection of the user. 


*/

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTerm: "", // current text value of search box
      books: [] // books in search results
    };

    this.getSearchResults = this.getSearchResults.bind(this);
  }

  /*
  
    searches database to see what books match search term, stores results.

  */

  getSearchResults(term) {
    const MAX_RESULTS = 20;

    search(term, MAX_RESULTS).then(results => {
      
      if (results instanceof Array) {
        
        results.sort(sortBy('title'))
        this.setState({ books: results });

      }  
    });
  }

  render() {
    return (
      <div>
        <Link to="/" onClick={() => this.props.updateShowInfo(false)}>Go To Personal Collection</Link>
        <SearchBar getSearchResults={this.getSearchResults} />
        <SearchResults
          showInfo={this.props.showInfo}
          getBook={this.props.getBook}
          selectedBook={this.props.selectedBook}
          bookShelfHandler={this.props.bookShelfHandler}
          books={this.state.books}
        />
      </div>
    );
  }
}

export default Search;
