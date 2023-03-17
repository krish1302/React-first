import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email: '',
        password: ''
      }
    }

    emailChange = (event) =>{
        this.setState({
            email: event.target.value
        })
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    submit = () => {
        console.log('form submitted')
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
            <input placeholder='please enter your email' value={this.state.email} onChange={this.emailChange}></input><br></br>
            <input placeholder='please enter your password' value={this.state.password} onChange={this.passwordChange}></input><br></br>
            <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login