import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
// import 'semantic-ui-css/semantic.min.css';

import { createStore } from 'redux';
import reducers from './reducers';

import {Provider} from 'react-redux';

const store = createStore(reducers);

class Home extends React.Component {
    render() {
        return (
            <h2>Hey, I am HOME!</h2>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <h2>Hey, I am ABOUT!</h2>
        );
    }
}

class Articles extends React.Component {
    render() {
        return (
            <h2>Hey, I am ARTCILES!</h2>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
