import "../../assets/less/Main.less";
import React from 'react';
import { Component, PropTypes } from 'react';
import Button from './Button.jsx';

import { connect } from 'react-redux';
import { addMessage, removeMessage } from '../actions/actions';

class App extends Component{
	componentDidMount(){
		const { dispatch } = this.props;

		var inputObj = this.refs.helloInput;
		var removeBtn = this.refs.removeInput;

		console.log(inputObj);
	    inputObj.addEventListener("keydown",(e) => {
	    	if(e.which == 13){ // enter
	    		dispatch(addMessage(inputObj.value));
	    		inputObj.value = "";
	    	}
	    });
	}

    render(){
    	const { dispatch, message, removeMessage } = this.props;
        return (
        	<div>
        		<input type="text" placeholder="text" ref="helloInput"></input>
        		<div>Hello Text: {message}</div>
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
};

function select(state){
	return {
		message: state.message
	}
}

export default connect(select)(App);
