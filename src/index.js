import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
// import 'semantic-ui-css/semantic.min.css';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

import {Provider} from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
