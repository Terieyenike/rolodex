import { combineReducers } from 'redux';
import robotsReducer from './robotsReducer';
import searchRobots from './searchReducer';

const rootReducer = combineReducers({
  monsters: robotsReducer,
  text: searchRobots,
});

export default rootReducer;
