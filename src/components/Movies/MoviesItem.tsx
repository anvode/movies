import * as React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './Movies.scss';

export interface MoviesItemProps {
    id: number,
    title: string
}

const MoviesItem: React.FC<MoviesItemProps & any> = (props) => {
    return <>
        <h2 className="movies-item__title"><Link className="movies-item__link" to={`movie/${props.id}`}>{props.title}</Link></h2>
    </>;
};

export default withRouter(MoviesItem);