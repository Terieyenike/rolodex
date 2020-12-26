import * as actions from '../actions/robotsActions';

export const initialState = {
  searchField: '',
};

export default function searchRobots(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_SEARCH_FIELD:
      return { searchField: action.payload };
    default:
      return state;
  }
}
