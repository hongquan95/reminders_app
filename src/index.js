import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';

import { createStore} from 'redux';
import reducertop from './reducers';

// debugger;
const store = createStore(reducertop);
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
