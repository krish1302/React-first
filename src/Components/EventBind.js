import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: "Welcome to the application"
      }
    }

    greet = (event) => {
        this.setState({
            message: "Thanks for using this application"
        })
        console.log(event)
    }

  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={()=> this.greet()}>Greet</button>
      </div>
    )
  }
}

export default EventBind