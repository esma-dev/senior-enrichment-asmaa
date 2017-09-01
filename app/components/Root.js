import React, { Component } from 'react';
import StudentsList from './StudentsList';
import CampusesList from './CampusesList';
import Navbar from './Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchCampuses } from '../store/campuses';
import { fetchStudents } from '../store/students';
import store from '../store';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/all-campuses" component={CampusesList} />
            <Route exact path="/all-students" component={StudentsList} />
            <Redirect to="/all-campuses" />
          </Switch>
        </main>
      </div>
    )
  }
}
