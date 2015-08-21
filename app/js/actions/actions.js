import dispatcher from "../dispatcher/dispatcher";
import constants from "../constants/constants";

export default new class Actions{
	hello(text){
		dispatcher.dispatch({
			type: constants.HELLO,
			text: text
		});
	}
}