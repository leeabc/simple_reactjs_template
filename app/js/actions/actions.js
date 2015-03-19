var dispatcher = require("../dispatcher/dispatcher");
var constants = require("../constants/constants")
var actions = {
	hello: function(text){
		dispatcher.dispatch({
			type: constants.HELLO,
			text: text
		});
	}
};

module.exports = actions;