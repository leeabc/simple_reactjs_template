import { combineReducers } from 'redux'
import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actions/actions'

function message(state = "", action){
	switch(action.type){
		case ADD_MESSAGE:
			return action.text;
		case REMOVE_MESSAGE:
			return "";
		default:
			return state;
	}
}

const testApp = combineReducers({
	message
});

export default testApp