import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
// import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Each module exports its own sub-reducer by default.
 * We're giving them the same name as the field we want on state,
 * so that we can cleverly use the shorthand notation in the object we
 * send to combineReducers (comment from Stackchat React-Redux)
 */

 //import all sub-reducers
import campuses from './campuses';
import students from './students';
// import currentCampus from './currentCampus';
// import currentStudent from './currentStudent';
// import newCampusEntry from './newCampusEntry';
// import newStudentEntry from './newStudentEntry';


//reducer
const reducer = combineReducers({
  campuses,
  students
});

//store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
)

export default store;

//export action creators
export * from './campuses';
export * from './students';
