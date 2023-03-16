import React from 'react'

function Student(props) {
  return (
    <div>
        <h1>{props.student.id}</h1>
        <h1>{props.student.name}</h1>
        <h1>{props.student.stand}</h1>
    </div>
  )
}

export default Student