import "../../assets/less/Main.less";
import React from 'react';
import { Component, PropTypes } from 'react';
import Button from './Button.jsx';

import { connect } from 'react-redux';
import { addMessage, removeMessage, fetchWeather } from '../actions/actions';

class App extends Component{
	componentDidMount(){
		const { dispatch } = this.props;

		var inputObj = this.refs.helloInput;
		var removeBtn = this.refs.removeInput;
		var searchWeather = this.refs.searchWeather;

		console.log(inputObj);
	    inputObj.addEventListener("keydown",(e) => {
	    	if(e.which == 13){ // enter
	    		dispatch(addMessage(inputObj.value));
	    		inputObj.value = "";
	    	}
	    });

	    searchWeather.addEventListener("keydown", (e)=>{
	    	if(e.which == 13){
	    		console.log(searchWeather.value);
	    		dispatch(fetchWeather(searchWeather.value));
	    		searchWeather.value = "";
	    	}
	    });

	    //fetch weather
	    dispatch(fetchWeather());
	}

    render(){
    	const { dispatch, message, removeMessage, weather } = this.props;
        return (
        	<div>
        		Hello Text: <input type="text" placeholder="text" ref="helloInput"></input>
        		<div>Hello Text: {message}</div>
        		<p/>
        		City Weather: <input type="text" placeholder="text" ref="searchWeather"></input>
        		<div>isFetching: {(weather.isFetching)?"Fetching":"Done"}</div>
        		<div>City: {weather.city}</div>
        		<div>Temperature: {weather.temperature}</div>
        		<hr/>
            	<Button ref="removeInput" text="Hello World!" onClickHandler={this.handleRemove.bind(this)}></Button>
            </div>
        );
    }

    handleRemove(){
    	const { dispatch } = this.props;
    	dispatch(removeMessage());
    }
};

App.propTypes = {
	message: PropTypes.string.isRequired,
	weather: PropTypes.object.isRequired
};

function select(state){
	return {
		message: state.message,
		weather: state.weather
	}
}

export default connect(select)(App);
