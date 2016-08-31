import { combineReducers } from 'redux';
import activityReducer from './ActivityReducer';

const rootReducer = combineReducers({
	activity : activityReducer
});

export default rootReducer;
