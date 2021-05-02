import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { intlWrapper } from './config/test/intlWrapper';
import App from './App';

test('App: have routing', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        { wrapper: intlWrapper }
    );

    expect(<App />).toMatchSnapshot();
    expect(screen.getByText('My React starter.')).toBeInTheDocument();
});
