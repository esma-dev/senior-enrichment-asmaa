import axios from 'axios';

// ACTION TYPES
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';

// ACTION CREATORS
export function getCampus (campus) {
  return {
    type: GET_CAMPUS,
    campus
  }
}

export function getCampuses (campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

// THUNK CREATORS

export function fetchCampuses(){
  return function thunk (dispatch){
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action); //calls the reducer with the action and what is returned is the new state
      });
  }
}

// REDUCER

export default function reducer (state = [], action) {

  switch(action.type){
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state, action.campus];
    default:
      return state;
  }

}
