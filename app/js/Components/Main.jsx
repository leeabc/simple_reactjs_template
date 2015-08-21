require("../../assets/less/Main.less");

var React = require('react');
var store = require('../stores/stores');
var actions = require("../actions/actions");
var Button = require("./Button.jsx");

var Main = React.createClass({
	getInitialState: function () {
	    return {
	        helloTxt : store.getHello()
	    };
	},
	componentDidMount: function () {
	    store.addChangeListener(this._onChange);

		var inputObj = this.refs.helloInput.getDOMNode();
	    inputObj.addEventListener("keydown",function(e){
	    	if(e.which == 13){ // enter
	    		actions.hello(inputObj.value);
	    	}
	    });
	},
	componentWillMount: function () {
	    store.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState({
			helloTxt: store.getHello()
		});
	},
    render: function(){
        return (
        	<div>
        		<input type="text" placeholder="text" ref="helloInput"></input>
        		<div>Hello Text: {this.state.helloTxt}</div>
        		<hr/>
            	<Button text="Hello World"></Button>
            </div>
            );
    }

    });

module.exports = Main;