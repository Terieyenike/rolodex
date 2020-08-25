import * as actions from '../actions/robotsActions';

export const initialStateSearch = {
  searchField: '',
};

export const searchRobots = (state = initialStateSearch, action) => {
  switch (action.type) {
    case actions.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      };

    default:
      return state;
  }
};

export const initialState = {
  monsters: [],
  loading: false,
  hasErrors: false,
};

export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MONSTERS:
      return { ...state, loading: true };
    case actions.GET_MONSTERS_SUCCESS:
      return { monsters: action.payload, loading: false };
    case actions.GET_MONSTERS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
