import { Movie } from '../types/Movies';
import { Dispatch } from 'redux';
import { MOVIES_FETCH, MOVIES_FETCH_LOADING, MOVIES_FETCH_ERROR, MoviesActionTypes } from '../types/actions';

export const fetchMovies = (searchQuery: string) => {

    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(setMoviesFetchLoadingAction(true));

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_TOKEN}&query=${searchQuery}`);
            const {results, total_pages} = await response.json();
            dispatch(setMoviesAction(results, searchQuery, total_pages));
            dispatch(setMoviesFetchLoadingAction(false));
    
        } catch (err) {
            dispatch(setMoviesFetchLoadingAction(false));
            dispatch(setMoviesFetchErrorAction(err.message));
        }
    };
};

export const setMoviesAction = (movies: Movie[], searchQuery: string, pages: number): MoviesActionTypes => {
    return {
        type: MOVIES_FETCH,
        payload: {
            movies,
            searchQuery,
            pages
        }
    };
};

export const setMoviesFetchErrorAction = (error: boolean): MoviesActionTypes => {
    return {
        type: MOVIES_FETCH_ERROR,
        payload: {
            error: error
        }
    };
};

export const setMoviesFetchLoadingAction = (loading: boolean): MoviesActionTypes => {
    return {
        type: MOVIES_FETCH_LOADING,
        payload: {
            loading: loading 
        }

    };
};
