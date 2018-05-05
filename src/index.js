import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
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

render(() => (<h1>Hello World!</h1>));

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(() => (<h1>Hello World!</h1>))
    })
}
