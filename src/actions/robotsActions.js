export const GET_MONSTERS = 'GET MONSTERS';
export const GET_MONSTERS_SUCCESS = 'GET_MONSTERS_SUCCESS';
export const GET_MONSTERS_FAILURE = 'GET_MONSTERS_FAILURE';
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const getMonsters = () => ({
  type: GET_MONSTERS,
});

export const getMonstersSuccess = (monsters) => ({
  type: GET_MONSTERS_SUCCESS,
  payload: monsters,
});

export const getMonstersFailure = () => ({
  type: GET_MONSTERS_FAILURE,
});

export function fetchMonsters() {
  return async (dispatch) => {
    dispatch(getMonsters());
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      dispatch(getMonstersSuccess(data));
    } catch (error) {
      dispatch(getMonstersFailure());
    }
  };
}
