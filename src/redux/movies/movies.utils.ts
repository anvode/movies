import { Dispatch } from 'redux';
import { setMoviesAction, setMoviesFetchErrorAction, setMoviesFetchLoadingAction } from './movies.actions';

export const fetchMovies = (searchQuery: string, currentPage: number) => {

    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(setMoviesFetchLoadingAction(true));

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_TOKEN}&query=${searchQuery}&page=${currentPage}`);
            const {results, total_pages} = await response.json();
            dispatch(setMoviesAction(results, searchQuery, total_pages, currentPage));
            dispatch(setMoviesFetchLoadingAction(false));
    
        } catch (err) {
            dispatch(setMoviesFetchLoadingAction(false));
            dispatch(setMoviesFetchErrorAction(err.message));
        }
    };
};

