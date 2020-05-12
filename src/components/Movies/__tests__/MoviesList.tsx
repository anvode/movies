import React from 'react';
import Store from '../../../redux/store';
import { render } from '@testing-library/react';
import MoviesList from '../MoviesList';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('MoviesList', () => {
    it('renders without crashingt', () => {
        const { asFragment } = render( <Provider store={Store}><BrowserRouter><MoviesList /></BrowserRouter></Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});