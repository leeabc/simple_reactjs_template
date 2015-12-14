import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import testApp from './reducers/reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { fetchWeather } from './actions/actions';


//component
import Main from './Components/Main.jsx'
//prepare logger middleware
const loggerMiddleware = createLogger();
//apply middleware
const createStoreWithMiddleware = applyMiddleware(
	thunk,
	loggerMiddleware
	)(createStore);

const store = createStoreWithMiddleware(testApp);

$(()=>{
    render(
    	<Provider store={store}>
    		<Main />
    	</Provider>,
    	document.getElementById("container")
    );
});