import React, { Component } from 'react'

class FormHandle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userName: ''
      }
    }

    setUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
        console.log(event)
    }

  render() {
    return (
      <div>
        <input placeholder='enter your name' value={this.state.userName} onChange={this.setUserName} ></input>
        {this.state.userName}
      </div>
    )
  }
}

export default FormHandle