import { Movie } from './types/Movies';
import { MOVIES_FETCH, MOVIES_FETCH_LOADING, MOVIES_FETCH_ERROR, MoviesActionTypes } from './types/actions';

export const setMoviesAction = (movies: Movie[], searchQuery: string, pages: number, currentPage: number): MoviesActionTypes => {
    return {
        type: MOVIES_FETCH,
        payload: {
            movies,
            searchQuery,
            pages,
            currentPage
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
