import React from 'react';
import { render } from '@testing-library/react';
import { intlWrapper } from '../../config/test/intlWrapper';
import Home from './Home';

test('Home: should render some text', () => {
    const { getByText } = render(<Home />, { wrapper: intlWrapper });

    expect(getByText('My React starter.')).toBeInTheDocument();
    expect(getByText).toMatchSnapshot();
});
