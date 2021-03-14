import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Shelves from "./Shelves";
import Search from "./Search";

class BooksApp extends React.Component {
    state = {
        myShelves: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((shelves) => {
                this.setState(() => ({
                    myShelves: shelves
                }))
            })
    }

    updateBook = (updatingBook, shelf) => {
        BooksAPI.update(updatingBook, shelf)
            .then(() => {
                let updatingBookIndex = this.state.myShelves
                    .indexOf(updatingBook)
                console.log(updatingBookIndex)
                if (updatingBookIndex >= 0) {
                    this.setState((currentState) => ({
                        myShelves: currentState.myShelves.map((book, index) => {
                            if (index === updatingBookIndex)
                                book.shelf = shelf

                            return book
                        })
                    }))
                } else {
                    this.setState((currentState) => ({
                        myShelves: currentState.myShelves.concat([updatingBook])
                    }))
                }
            })
    }

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() =>
                    <Search/>
                }/>
                <Route exact path='/' render={() =>
                    <Shelves
                        myShelves={this.state.myShelves}
                        onShelfChange={this.updateBook}
                    />
                }/>
            </div>
        )
    }
}

export default BooksApp
