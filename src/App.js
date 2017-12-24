import React, { Component } from "react";
import CurrentlyReading from "./CurrentlyReading.js";
import AlreadyRead from "./AlreadyRead.js";
import WantToRead from "./WantToRead.js";
import { getAll, update } from "./BooksAPI.js";
import Search from "./Search.js";
import { Link, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // get the initial personal collection of books and put them in their shelves
    getAll().then(data => {
      this.setState({
        read: data.filter(item => item.shelf === "read"),
        currentlyReading: data.filter(
          item => item.shelf === "currentlyReading"
        ),
        wantToRead: data.filter(item => item.shelf === "wantToRead")
      });
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedBook: null, // keeps track of the current clicked book
      showInfo: false, // used to display info for selecedBook in a popup
      currentlyReading: [], // stores all the books user is reading
      read: [], // stores all the books user has already read
      wantToRead: [], // stores the books the user wants to read
    };
    // bind 'this' so functions work correctly in child components when passed as props
    this.showBookMenu = this.showBookMenu.bind(this);
    this.updateBookShelf = this.updateBookShelf.bind(this);
    this.updateSelectedBook = this.updateSelectedBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.addBook = this.addBook.bind(this);
    this.getBook = this.getBook.bind(this);
    this.showCollectionMenu = this.showCollectionMenu.bind(this);
  }

  /*
  
    used to select a new book, and close the 'showInfo' popup box of previous book

  */

  updateSelectedBook(book) {
    if (book != null) {
      this.setState({
        selectedBook: book,
        showInfo: false
      });
    }
  }

  /*
    
      removes book from its current shelf (effectively deleting it from personal collection)

  
  */

  deleteBook(book) {
    if (book.shelf === "read") {
      this.setState(state => ({
        selectedBook: null,
        read: state.read.filter(aBook => aBook.id !== book.id)
      }));
    } else if (book.shelf === "wantToRead") {
      this.setState(state => ({
        selectedBook: null,
        wantToRead: state.wantToRead.filter(aBook => aBook.id !== book.id)
      }));
    } else if (book.shelf === "currentlyReading") {
      this.setState(state => ({
        selectedBook: null,
        currentlyReading: state.currentlyReading.filter(
          aBook => aBook.id !== book.id
        )
      }));
    }
  }

  /*
  
    adds book from a general search of available books to the
    wantToRead shelf of personal collection. 

  */

  addBook(book) {
    if (book !== undefined && this.getBook(book.id) === undefined) {
      book.shelf = "wantToRead";

      this.setState(state => ({
        selectedBook: null,
        wantToRead: state.wantToRead.concat([book])
      }));
    }
  }

  /*
  
    sets the selectedBook value to current clicked book in searched books, displaying
    option(s) available for that book

  */

  showCollectionMenu(book) {
    if (book !== undefined) {
      this.setState({ selectedBook: book });
    }
  }

  /*
  
    updates focus book to the current clicked book in personal collection.
    If the info option is selected, pops up info box. 
    If the delete option is selected, deletes book.
    if move to another shelf option is selected, moves book to that shelf.
  */

  showBookMenu(book, shelf) {
    this.updateSelectedBook(book);
    if (shelf === "info") this.setState({ showInfo: true });
    else if (shelf !== "delete" && shelf != null && shelf != book.shelf)
      this.updateBookShelf(book, shelf);
    else if (shelf === "delete") this.deleteBook(book);
  }

  /*

    takes a bookID and returns the shelf that book lives in, or if its not in a shelf,
    returns undefined.

  */

  getBook(bookID) {
    const b1 = this.state.read.find(book => book.id === bookID);
    if (b1 !== undefined) return b1;
    else {
      const b2 = this.state.currentlyReading.find(book => book.id === bookID);
      if (b2 !== undefined) return b2;
      else return this.state.wantToRead.find(book => book.id === bookID);
    }
  }

  /*

  If there is a book, moves it from its old shelf to the new shelf.

  */

  updateBookShelf(book, newShelf) {
    if (book !== undefined && book.shelf !== newShelf) {
      const oldShelf = book.shelf;
      let changedBook = Object.assign({}, book);
      changedBook.shelf = newShelf; // update book
      update(book, newShelf); // update book's shelf in database

      // remove book from old shelf, and add book to new shelf
      this.setState(state => ({
        [newShelf]: state[newShelf].concat([changedBook]),
        [oldShelf]: state[oldShelf].filter(aBook => aBook.id !== book.id),
        selectedBook: null
      }));
    }
  }
  render() {
 
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Link to="/search">Add Books</Link>
              <CurrentlyReading
                showInfo={this.state.showInfo}
                selectedBook={this.state.selectedBook}
                bookShelfHandler={this.showBookMenu}
                books={this.state.currentlyReading}
              />
              <WantToRead
                showInfo={this.state.showInfo}
                selectedBook={this.state.selectedBook}
                bookShelfHandler={this.showBookMenu}
                books={this.state.wantToRead}
              />
              <AlreadyRead
                showInfo={this.state.showInfo}
                selectedBook={this.state.selectedBook}
                bookShelfHandler={this.showBookMenu}
                books={this.state.read}
              />
            </div>
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search
              getBook={this.getBook}
              addBook={this.addBook}
              selectedBook={this.state.selectedBook}
              bookShelfHandler={this.showCollectionMenu}
              updateSearchStatus={this.updateSearchStatus}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
