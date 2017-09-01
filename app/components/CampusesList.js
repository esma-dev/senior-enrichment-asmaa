import React from 'react';
import { connect } from 'react-redux';

function CampusesList(props){
  return(
    <ul>
        {
          props.campuses.map(campus => (
            <li key={campus.id}>
              {campus.name}
            </li>
          ))
        }
    </ul>
  )
};

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(CampusesList);
