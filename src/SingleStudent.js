import React from 'react'

const SingleStudent = (props) => {
  console.log(props)
  const { school, match } = props

  return (
    <div>
      <h4>{`Hi, my name is ${match.params.student_name}!`}</h4>
      <p>{`I go to ${school.name} and I'm in the ${school.cohort}.`}</p>
    </div>

)
}

export default SingleStudent