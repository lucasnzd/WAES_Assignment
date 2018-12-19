import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Routes from './routes';
const store = createStore(reducers);

class App extends Component {
    render = () => {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
