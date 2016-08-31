import * as types from '../constants/ActionTypes';
import axios from 'axios';

export function fetchActivityData() {
	let request = axios.get('/data/activity.json');

	return {
		type: types.ACTIVITY_FETCH_DATA,
		payload: request
	}
}

export function changeFilter(){
	let request = axios.get('/data/activity.json');

	return {
		type : types.ACTIVITY_CHANGE_FILTER,
		payload : request
	}

}