import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default function Navbar (props) {

  return (
    <nav>
      <h3>
        <Link to={`/all-campuses`}>
        # Campus
        </Link>
      </h3>
      <h3>
        <Link to={`/all-students`}>
        # Student
        </Link>
      </h3>
    </nav>
  );
}
