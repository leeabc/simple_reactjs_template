import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import testApp from './reducers/reducers';

//component
import Main from './Components/Main.jsx'

let store = createStore(testApp);

store.subscribe(()=>{
	console.log(store.getState());
});

$(()=>{
    render(
    	<Provider store={store}>
    		<Main />
    	</Provider>,
    	document.getElementById("container")
    );
});