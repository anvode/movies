import * as React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/root-reducer';
import Loader from '../Loader/Loader';

import './Movies.scss';
import MoviesSearch from '../MoviesSearch/MoviesSearch';
import MoviesList from './MoviesList';
export interface MoviesProps {}

const Movies: React.FC<MoviesProps> = () => {
    const { moviesFetchLoading, moviesFetchError } = useSelector((state: RootState) => state.movies);

    if (moviesFetchError) {
        return <div>
            Oops! An Error happens while Fetching:  <strong>{moviesFetchError}</strong>
        </div>;
    }

    if (moviesFetchLoading) {
        return <Loader></Loader>;
    }

    return <>
        <div className="main">
            <div className="container">
                <MoviesSearch></MoviesSearch>
                <MoviesList></MoviesList>
            </div>
        </div>
    </>;
};

export default Movies;