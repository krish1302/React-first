import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        message: this.props.message,
        child_message : "Hi Parent",
        listener: this.props.listener
      }
    }

  render() {
    return (
      <div>
        <b>From Parent : {this.state.message}</b>
        <br></br>
        <button onClick={() => this.state.listener(this.state.child_message)}>send message</button>
      </div>
    )
  }
}

export default Child