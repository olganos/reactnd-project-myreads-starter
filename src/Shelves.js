import React, {Component} from "react"
import ShelvesDirectory from "./ShelvesDirectory"
import Book from "./Book";
import {Link} from "react-router-dom";

class Shelves extends Component {
    render() {

        const currentlyReading = this.props.myShelves
            .filter(book => book.shelf === ShelvesDirectory.CurrentlyReading)

        const wantToRead = this.props.myShelves
            .filter(book => book.shelf === ShelvesDirectory.WantToRead)

        const read = this.props.myShelves
            .filter(book => book.shelf === ShelvesDirectory.Read)

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentlyReading.map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onShelfChange={this.props.onShelfChange}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToRead.map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onShelfChange={this.props.onShelfChange}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {read.map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onShelfChange={this.props.onShelfChange}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="open-search">
                    <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
                </div>*/}
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Shelves