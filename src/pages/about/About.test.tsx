import React from 'react';
import { render } from '@testing-library/react';
import { intlWrapper } from '../../config/test/intlWrapper';
import About from './About';

test('About: should render some text', () => {
    const { getAllByText } = render(<About />, { wrapper: intlWrapper });

    expect(getAllByText('About page.'));
    expect(getAllByText).toMatchSnapshot();
});
