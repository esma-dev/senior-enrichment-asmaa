import React, { Component } from 'react';
import { connect } from 'react-redux';

function StudentsList(props){
  return(
    <ul>
        {
          props.students.map(student => {
            return <li key={student.id}>
              {student.name}
            </li>
          })
        }
    </ul>
  )
};

const mapStateToProps = function (state) {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(StudentsList);
