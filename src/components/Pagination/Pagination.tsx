import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/root-reducer';
import { fetchMovies } from '../../redux/movies/movies.utils';

import './Pagination.scss';

export interface PaginationProps {}

const Pagination: React.FC<PaginationProps> = (props) => {
    const { currentPage, pages, searchQuery } = useSelector((state: RootState) => state.movies);
    const paginationList = Array.from(new Array(pages),(_,index)=> index + 1);
    const dispatch = useDispatch();

    const handleClick = (id: number) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (id === currentPage) return;

        dispatch(fetchMovies(searchQuery, id));
    };

    return <div className="main">
        <div className="container">
            {paginationList.map(page => {
                const current = page === currentPage ? ' is--current' : '';
                return <button onClick={handleClick(page)} key={page} className={`pagination__btn btn${current}`}>{page}</button>;
            })}
        </div>
    </div>;
};

export default Pagination;