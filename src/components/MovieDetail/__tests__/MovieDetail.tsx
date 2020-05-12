import React from 'react';
import Store from '../../../redux/store';
import { render } from '@testing-library/react';
import MovieDetail from '../MovieDetail';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('MovieDetail', () => {
    it('renders without crashing', () => {
        const { asFragment } = render( <Provider store={Store}><BrowserRouter><MovieDetail /></BrowserRouter></Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});