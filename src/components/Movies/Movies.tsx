import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/root-reducer';
import { fetchMovies } from '../../redux/movies/movies.actions';
import Loader from '../Loader/Loader';

import './Movies.scss';

export interface MoviesProps {}

const Movies: React.FC<MoviesProps> = () => {
    const {movies, searchQuery, pages, moviesFetchLoading, moviesFetchError} = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch(); //this hook gives us dispatch method

    useEffect(() => {
        dispatch(fetchMovies('Fast'));
    }, []);

    console.log('movies', movies, searchQuery, pages);

    if (moviesFetchError) {
        return <div>
            Oops! An Error happens while Fetching:  <strong>{moviesFetchError}</strong>
        </div>;
    }

    if (moviesFetchLoading) {
        return <Loader></Loader>;
    }

    return <>
       Movies
    </>;
};

export default Movies;