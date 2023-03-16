import React, { Component } from 'react'
import Student  from './Student';

class ListRender extends Component {
  render() {
    const names = ["bala", "krish", "jeya", "raj"]
    const students = [
        {id: 1, name: "stu1", stand: 1},
        {id: 2, name: "stu2", stand: 1},
        {id: 3, name: "stu3", stand: 1}
    ]
    
    return (
      
    <div>
        <div>{names.map((name, index) => <h1 key={index}>{name}</h1>)}</div>
        {students.map(student =>  <Student key={student.id} student={student}></Student>)}
    </div>
    )
  }
}

export default ListRender