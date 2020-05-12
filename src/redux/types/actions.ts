import { Movie } from './Movies';

export const MOVIES_FETCH = 'MOVIES_FETCH';
export const MOVIES_FETCH_LOADING = 'MOVIES_FETCH_LOADING';
export const MOVIES_FETCH_ERROR = 'MOVIES_FETCH_ERROR';

export interface SetMoviesAction {
    type: typeof MOVIES_FETCH;
    payload: {
        movies: Movie[];
        searchQuery: string,
        pages: number,
        currentPage: number
    };
}

export interface SetMoviesErrorAction {
    type: typeof MOVIES_FETCH_ERROR;
    payload: {
        error: boolean;
    }
}

export interface SetMoviesLoadingAction {
    type: typeof MOVIES_FETCH_LOADING;
    payload: {
        loading: boolean;
    }
}

export type MoviesActionTypes = SetMoviesAction | SetMoviesErrorAction | SetMoviesLoadingAction;
