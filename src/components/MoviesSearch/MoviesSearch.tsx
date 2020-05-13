import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/root-reducer';
import { fetchMovies } from '../../redux/movies/movies.actions';

import './MoviesSearch.scss';

export interface MoviesSearchProps {}

const MoviesSearch: React.FC<MoviesSearchProps> = () => {
    const {searchQuery} = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch();
    const [state, setState] = useState(searchQuery);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        !!state.length && dispatch(fetchMovies(state, 1));
    };

    return <>
        <h1 className="search__title">Search for: {searchQuery}</h1>
        <form onSubmit={submitHandler} className="search__form">
            <div className="row">
                <div className="search__input input">
                    <input
                        type="text"
                        aria-label="Suchbegriff eingeben (zB: Bloodsport)"
                        onChange={changeHandler}
                        placeholder="Suchbegriff eingeben (zB: Bloodsport)"
                        id="search"
                        name="search"
                        value={state}
                        className="search__input input__field">
                    </input>
                </div>
                <div className="search__button">
                    <button onClick={submitHandler} type="submit" className="btn">Search</button>
                </div>
            </div>
        </form>
    </>;
};

export default MoviesSearch;