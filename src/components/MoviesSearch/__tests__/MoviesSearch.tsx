import React from 'react';
import Store from '../../../redux/store';
import { render } from '@testing-library/react';
import MoviesSearch from '../MoviesSearch';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('MoviesSearch', () => {
    it('renders without crashing', () => {
        const { asFragment } = render( <Provider store={Store}><BrowserRouter><MoviesSearch /></BrowserRouter></Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});