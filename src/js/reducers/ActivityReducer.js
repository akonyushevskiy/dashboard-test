import { ACTIVITY_FETCH_DATA } from '../constants/ActionTypes';

const INITIAL_STATE = {
	data: null,
	filter : {
		groups : 'All groups',
		timePeriod : 'Last 7 days',
		measurement: 'Sentiment',
		other: 'Other'
	}
};


export default (state = INITIAL_STATE, action) => {

	console.log(action);

	switch (action.type) {

		case ACTIVITY_FETCH_DATA :
			return {
				data : {...action.payload.data},
				filter : {...state.filter}
			}

	}

	return state;
}
