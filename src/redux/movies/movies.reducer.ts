import { MoviesState } from '../types/Movies';
import { MOVIES_FETCH, MOVIES_FETCH_LOADING, MOVIES_FETCH_ERROR, MoviesActionTypes } from '../types/actions';

const initialState: MoviesState = {
    moviesFetchLoading: false,
    moviesFetchError: false,
    movies: [],
    searchQuery: '',
    pages: 1,
    currentPage: 1,
};

export const moviesReducer = (state: MoviesState = initialState, action: MoviesActionTypes): MoviesState => {

    switch (action.type) {

        case MOVIES_FETCH: {
            return {
                ...state,
                movies: action.payload.movies,
                searchQuery: action.payload.searchQuery,
                pages: action.payload.pages
            };
        }

        case MOVIES_FETCH_LOADING: {
            return {
                ...state,
                moviesFetchLoading: action.payload.loading
            };
        }

        case MOVIES_FETCH_ERROR: {
            return {
                ...state,
                moviesFetchError: action.payload.error
            };
        }

        default:
            return state;
    }
};
