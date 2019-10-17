import React from 'react'
import {
  Link,
  Route
} from 'react-router-dom'
import SingleStudent from './SingleStudent'

const school = {
  name: 'Flatiron School',
  cohort: '081519 Cohort'
}

const Students = (props) => {
  const { students } = props

  return (
    <div>
      <h2>Students</h2>
      <ol>
        {students.map((student, index) => {
          return (
            <li key={index} >
              <Link to={`/students/${student}`}>{student}</Link>
            </li>
          )
        })}
      </ol>

      {/* <Route path={`/students/:student_name`} component={SingleStudent} />  */}
      <Route  path={`/students/:student_name`} 
              render={(routeProps) => {
                return <SingleStudent {...routeProps} school={school}/>
              }}
      />

      
    </div>
  );
}

export default Students;


