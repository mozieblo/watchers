import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import ContactPage from '../contactPage/ContactPage';
import { intlWrapper } from '../../config/test/intlWrapper';

test('ContactPage: should render ', () => {
    const mockStore = configureMockStore([thunkMiddleware]);
    const store = mockStore();
    const { getByText } = render(
        <Provider store={store}>
            <ContactPage />
        </Provider>,
        { wrapper: intlWrapper }
    );

    expect(getByText).toMatchSnapshot();
});
