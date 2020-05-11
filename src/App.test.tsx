import React from 'react';
import Store from './redux/store';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
    it('snapshot App', () => {
        const { asFragment } = render( <Provider store={Store}><BrowserRouter><App /></BrowserRouter></Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});