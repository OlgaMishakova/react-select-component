import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { App } from "./components/App";
import './style.styl';

const render = Component => {
    ReactDOM.render(
        <Provider store={{}}>
            <AppContainer>
                <Component/>
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
};

render(() => (<App />));
