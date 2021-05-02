import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { messages, appLang } from './translations';
import store from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <IntlProvider locale={appLang} messages={messages[appLang]}>
                <Router>
                    <App />
                </Router>
            </IntlProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
