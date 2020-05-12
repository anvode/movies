import React from 'react';
import Store from '../../../redux/store';
import { render } from '@testing-library/react';
import Pagination from '../Pagination';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Pagination', () => {
    it('renders without crashing', () => {
        const { asFragment } = render( <Provider store={Store}><BrowserRouter><Pagination /></BrowserRouter></Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});