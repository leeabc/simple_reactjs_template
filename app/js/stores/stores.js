// var dispatcher = require("../dispatcher/dispatcher");
// var eventEmitter = require("events").EventEmitter;
// var constants = require("../constants/constants");
// var assign = require("object-assign");

import dispatcher from "../dispatcher/dispatcher"
import { EventEmitter } from "events";
import constants from "../constants/constants";
import assign from "object-assign";

var _data = {};
var _text = "";
var _CHANGE = "change";

class Store extends EventEmitter {
	constructor(){
		super();
	}
	
	getAll(){
		return _data;
	}

	getHello(){
		return _text;
	}

	hello(text){
		_text = text;
	}

	emitChange(){
		this.emit(_CHANGE);
	}

	addChangeListener(callback){
		this.on(_CHANGE, callback);
	}

	removeChangeListener(callback){
	    this.removeListener(_CHANGE, callback);
	}
}

var storeObj = new Store();

//register dispatcher
dispatcher.register((action) => {
	switch(action.type){
		case constants.HELLO:
			storeObj.hello(action.text)
			storeObj.emitChange();
		break;
	}
});

export default storeObj;
