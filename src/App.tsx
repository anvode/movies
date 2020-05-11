import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';

import './App.scss';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Movies} />
                <Route path='/:id' component={MovieDetail}/>
            </Switch>
        </>
    );
}

export default App;
