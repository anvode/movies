import * as React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { RootState } from '../../redux/root-reducer';

import './MovieDetail.scss';

export interface MovieDetailProps {
    match: {
        params: {
            id: string
        }
    };
    
}

const MovieDetail: React.FC<RouteComponentProps & MovieDetailProps> = (props) => {
    const { movies } = useSelector((state: RootState) => state.movies);
    const movie = movies.length ? movies.filter(movie => movie.id === parseInt(props.match.params.id))[0] : null;

    return <div className="main">
        <div className="container">
            {movie ? (
                <div className="movie-detail">
                    <h1 className="movie-detail__title">{movie.title}</h1>
                    <div className="movie-detail__content">
                        {movie.poster_path && <img className="movie-detail__image" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>}
                        <div className="movie-detail__description">
                            <p>{movie.overview}</p>
                            <button onClick={props.history.goBack} type="button" className="btn">Back to search</button>

                        </div>
                    </div>
                </div>

            ) : (
                <h1 className="movie-detail__title">No Movie Selected</h1>
            )}
        </div>
    </div>;
};

export default MovieDetail;