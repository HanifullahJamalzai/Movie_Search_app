import React from 'react'
import { useState } from 'react/cjs/react.development';
import MovieCardComponent from './MovieCardComponent';

export default function SearchMovie(){
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovie = async (e) =>{
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=d2c29320772df062f7d2d4f050be0b7e&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data.results);
            setMovies(data.results);
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <>
            <form
                style={
                    {
                        display: 'grid',
                    }
                }
                onSubmit={searchMovie}
            >
                <label 
                    className="label" 
                    htmlFor="query"
                    style={
                        {
                            fontSize: '1.2rem',
                            marginBottom: '0.2rem',
                            textTransform: 'uppercase'
                        }
                    }
                >
                    Movie Name
                </label>
                <input 
                    className="query" 
                    type="text" 
                    style={
                        {
                            fontSize: '1.6rem',
                            padding: '0.5rem 2rem',
                            lineHeight: '2.8rem',
                            borderRadius: '20px',
                            border: '1px solid #ddd',
                            marginBottom: '1rem',

                        }
                    }
                    name="query" 
                    placeholder="i.e. Jurassic Park"
                    value={query}
                    onChange={e => setQuery(e.target.value) }
                />

                <button 
                    className="button" 
                    type="submit"
                    style={
                        {
                            backgroundColor: 'rgb(0,0,0,0.75)',
                            color: 'white',
                            padding: '1rem 2rem',
                            border: '1px solid rgb(0,0,0,0.75)',
                            borderRadius: '20px',
                            fontSize: '1.4rem',
                            cursor: 'pointer',
                            transition: 'background-color 250ms'
                        }
                    }
                >
                    Search
                </button>
            </form>
            <div className="card-list"
                style={
                    {
                        marginTop: '4rem'
                    }
                }
            >
                    {movies.map(movie => ( <MovieCardComponent movie={movie}  key={movie.id} />))}
            </div> 
        </>
    )
}