import React, { Component } from 'react'
import CurrentlyReading from './CurrentlyReading.js' 
import AlreadyRead from './AlreadyRead.js'
import WantToRead from './WantToRead.js'
import {getAll, update} from './BooksAPI.js'
import Search from "./Search.js"
import {Link, Route} from 'react-router-dom'
import './App.css'






class App extends Component {


  componentDidMount() {
  
    getAll().then((data) => {

     
      this.setState({read: data.filter(item => item.shelf === "read"),
                     currentlyReading: data.filter(item => item.shelf === "currentlyReading"),
                     wantToRead: data.filter(item => item.shelf === "wantToRead")});  
      console.log(data)

    });

  }  
  

  constructor(props) {
  	super(props)

  	this.state = {
        selectedBook: null,
  		currentlyReading: [],
  		read: [],
  		wantToRead: [],
      searching: false 
  	}; 

  	this.showBookMenu = this.showBookMenu.bind(this)
    this.updateBookShelf = this.updateBookShelf.bind(this)
    this.updateSelectedBook = this.updateSelectedBook.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.addBook = this.addBook.bind(this)
    this.getBook = this.getBook.bind(this)
    this.showCollectionMenu = this.showCollectionMenu.bind(this)
  }

  updateSelectedBook(book) {
    if (book != null) {
        this.setState({selectedBook: book})
    }
  
  }	

  deleteBook(book) {

    console.log("delete called")
    console.log(book.shelf)
    if (book.shelf === "read") {

        this.setState(state => ({

          selectedBook: null,
          read: state.read.filter(aBook => (aBook.id !== book.id))

          })


        );

    }



     else if (book.shelf === "wantToRead") {

        this.setState(state => ({

          selectedBook: null,
          wantToRead: state.wantToRead.filter(aBook => (aBook.id !== book.id))

          })


        );

    }


     else if (book.shelf === "currentlyReading") {

        this.setState(state => ({

          selectedBook: null,
          currentlyReading: state.currentlyReading.filter(aBook => (aBook.id !== book.id))

          })


        );

    }

  }


   addBook(book) {
      if ((book !== undefined) && (this.getBook(book.id) === undefined)) {
        book.shelf = 'wantToRead'
         
        this.setState(

            (state) => ({
              selectedBook: null,
              wantToRead: state.wantToRead.concat([book])
            })


          );
      }

   }

  showCollectionMenu(book) {
    console.log("showCollection Menu called!")
    if (book !== undefined) {
     this.setState({selectedBook: book})
  }
  }


  showBookMenu(book, shelf) {

    this.updateSelectedBook(book)
    if ((shelf !== "delete") && (shelf != null) && (shelf != book.shelf)) this.updateBookShelf(book, shelf)
    else if (shelf === "delete") this.deleteBook(book) 

  }

  getBook(bookID) {
    const b1 = this.state.read.find( book => book.id === bookID)
    if (b1 !== undefined) return b1
    else {
      const b2 = this.state.currentlyReading.find( book => book.id === bookID) 
      if (b2 !== undefined) return b2
      else return this.state.wantToRead.find( book => book.id === bookID)   
    }  
  }





  
  // book.industryIdentifiers[1].identifier
  updateBookShelf(book, newShelf) {
    
    if (book !== undefined && book.shelf !== newShelf) {
    
    console.log(book)
    const oldShelf = book.shelf
    let changedBook = Object.assign({}, book)
    changedBook.shelf = newShelf // update book 
    console.log(changedBook)
    update(book, newShelf) // update book's shelf in database

    // remove book from old shelf, and add book to new shelf
    this.setState( (state) => ({

      [newShelf]: state[newShelf].concat([changedBook]),
      [oldShelf]: state[oldShelf].filter(aBook => (aBook.id !== book.id)),
      selectedBook: null

    })
 );
    




   
  
    console.log(this.state)
           
//  } else console.log("book undefined")


  }

}
  render() {
    /*

      <CurrentlyReading selectedBook={this.state.selectedBook} bookShelfHandler={this.showBookMenu} books={this.state.currentlyReading} />
     <WantToRead selectedBook={this.state.selectedBook} bookShelfHandler={this.showBookMenu} books={this.state.wantToRead} />
     <AlreadyRead selectedBook={this.state.selectedBook} bookShelfHandler={this.showBookMenu} books={this.state.read} />)


    */
    // {!this.state.searching && (<div><button onClick={() => this.setState({searching: true})}>Add Books To Collection</button>
    return (
     <div>

     <Route exact path="/" render={() =>

      (
      <div>  
     <Link to="/search" >Add Books</Link>    
     <CurrentlyReading selectedBook={this.state.selectedBook} bookShelfHandler={this.showBookMenu} books={this.state.currentlyReading} />
     <WantToRead selectedBook={this.state.selectedBook} bookShelfHandler={this.showBookMenu} books={this.state.wantToRead} />
     <AlreadyRead selectedBook={this.state.selectedBook} bookShelfHandler={this.showBookMenu} books={this.state.read} />
      </div>)

     }


     />
   
     <Route path="/search" render={ () =>


        <Search getBook={this.getBook} addBook={this.addBook} selectedBook={this.state.selectedBook} bookShelfHandler={this.showCollectionMenu} updateSearchStatus={this.updateSearchStatus} />


     } />

     

     
     </div>
    );
  }
}

export default App;
