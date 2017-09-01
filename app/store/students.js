import axios from 'axios';

//ACTION TYPES
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';

//ACTION CREATORS
export function getStudent (student) {
  return {
    type: GET_STUDENT,
    student
  }
}

export function getStudents (students) {
  return {
    type: GET_STUDENTS,
    students
  }
}

//THUNK CREATORS

export function fetchStudents(){
  return function thunk (dispatch){
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  }
}

//REDUCER

export default function reducer (state = [], action){

  switch(action.type){
    case GET_STUDENTS:
      return action.students;
    case GET_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
}
