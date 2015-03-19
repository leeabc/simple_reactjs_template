var dispatcher = require("../dispatcher/dispatcher");
var eventEmitter = require("events").EventEmitter;
var constants = require("../constants/constants");
var assign = require("object-assign");

var _data = {};
var _text = "";
var _CHANGE = "change";

var store = assign({}, eventEmitter.prototype, {
	getAll: function(){
		return _data;
	},
	//hello world
	getHello: function(){
		return _text;
	},
	hello: function(text){
		_text = text;
	},
	emitChange: function(){
		console.log(_data);
		console.log(_text);
		this.emit(_CHANGE);
	},
	addChangeListener: function(callback){
		this.on(_CHANGE, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(_CHANGE, callback);
	}
});

//register dispatcher
dispatcher.register(function(action){
	switch(action.type){
		case constants.HELLO:
			store.hello(action.text)
			store.emitChange();
		break;
	}
});

module.exports = store;
