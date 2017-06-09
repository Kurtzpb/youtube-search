import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie';
import { App } from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

const history = createHistory();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/movie/:id' component={Movie} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
