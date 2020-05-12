import * as React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/root-reducer';
import MoviesItem from './MoviesItem';

import './Movies.scss';

export interface MoviesListProps {}

const MoviesList: React.FC<MoviesListProps> = () => {
    const { movies } = useSelector((state: RootState) => state.movies);

    return <>
        {movies.length > 0 ? (
            movies.map(({id, title}) => (
                <MoviesItem key={id} id={id} title={title}></MoviesItem>
            ))
        ) : (
            <p>No Movies</p>
        )}

    </>;
};

export default MoviesList;