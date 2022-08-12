import { render } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import axios from 'axios';
import AddMovie from './AddMovie';


class App extends React.Component {


    state = {

        movies: [],

        searchQuery: ""






    }


    /* async componentDidMount() {
        const baseURL = "http://localhost:3002/movies"
        const response = await fetch(baseURL)
        console.log(response)
        const data = await response.json();
        console.log(data)
        this.setState({ movies: data })
    } */
    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies")
        console.log(response)
        this.setState({ movies: response.data })
    }


    /*   deleteMovie = (movie) => {
  
          const newMovieList = this.state.movies.filter(
              m => m.id !== movie.id
          )
  
          this.setState({
              movies: newMovieList
          })
      } */

    //FETCH API 

    /* deleteMovie = async (movie) => {

        const baseURL = `http://localhost:3002/movies/${movie.id}`
        await fetch(baseURL, { method: "DELETE" })

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )

        this.setState({
            movies: newMovieList
        })
    } */
    deleteMovie = async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
    }
    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }





    render() {

        let filtredMovies = this.state.movies.filter((movie) => {

            return movie.name.toLowerCase().indexOf(this.state.searchQuery) !== -1
        }
        )
        return (



            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MovieList
                    movies={filtredMovies}
                    deleteMovieProp={this.deleteMovie}
                />
                <AddMovie />
            </div>


        )


    }
}

export default App;

