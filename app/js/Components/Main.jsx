import "../../assets/less/Main.less";

import React from 'react';
import store from '../stores/stores';
import actions from '../actions/actions';
import Button from './Button.jsx';

export default class extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	        helloTxt : store.getHello()
	    }
	}

	componentDidMount(){
	    store.addChangeListener(this._onChange.bind(this));

		var inputObj = this.refs.helloInput.getDOMNode();

	    inputObj.addEventListener("keydown",(e) => {
	    	if(e.which == 13){ // enter
	    		actions.hello(inputObj.value);
	    	}
	    });
	}
	componentWillMount(){
	    store.removeChangeListener(this._onChange);
	}

	_onChange(){
		this.setState({
			helloTxt: store.getHello()
		});
	}

    render(){
        return (
        	<div>
        		<input type="text" placeholder="text" ref="helloInput"></input>
        		<div>Hello Text: {this.state.helloTxt}</div>
        		<hr/>
            	<Button text="Hello World!"></Button>
            </div>
        );
    }
};