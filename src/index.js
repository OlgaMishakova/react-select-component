import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import { App } from "./components/App";
import { HEROES } from "./consts/consts";
import { retrieveSuggestions } from "./reducers";
import './style.styl';

export const initialState = { suggestions: HEROES };
export const store = createStore(retrieveSuggestions, initialState);

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component/>
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
};

render(() => (<App />));
