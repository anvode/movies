import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import NotFound from './components/NotFound/NotFound';
import './App.scss';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Movies} />
                <Route path='/movie/:id' component={MovieDetail}/>
                <Route component={NotFound}/>
            </Switch>
        </>
    );
}

export default App;

