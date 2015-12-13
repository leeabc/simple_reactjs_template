export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export function addMessage(text){
	return {type: ADD_MESSAGE, text}
}

export function removeMessage(){
	return {type: REMOVE_MESSAGE}
}