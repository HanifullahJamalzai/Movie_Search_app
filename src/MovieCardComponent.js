import React from 'react'

export default function MovieCardComponent({movie}){
    // const {movie} = props;
    // const movie = props.movie;
    return(
        <div className="card"
            style={
                {
                    padding: '2rem 4rem',
                    borderRadius: '10px',
                    boxShadow: '1px 1px 5px rgba(0,0,0,0.25)',
                    marginBottom: '2rem',
                    backgroundColor: 'white'
                }
            }
        >
            <img className="card--img"
                style={
                    {
                        margin: '0 auto',
                        display: 'block'
                    }
                }
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + 'Poster'}
            />
            <div className="card--content">
                <h3 className="card--title"
                    style={
                        {
                            marginBottom: '0.5rem',
                            fontSize: '3.2rem'

                        }
                    }
                >{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.realease_date}</small></p>
                <p><small>RATINGE: {movie.vote_average}</small></p>
                <p className="movie--desc">{movie.overview}</p>
            </div>
        </div>

    )
}