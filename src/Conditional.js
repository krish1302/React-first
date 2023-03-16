import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        user: false
      }
    }

  render() {
    
    let message = this.state.user ? (
        <h1>Welcome</h1>
    ) : (
        <h1>bye</h1>
    )
    
    return (
        <div>
            {message}
        </div>
    )

    // let message
    // if (this.state.user){
    //     message = <h1>Welcome</h1>
    // }
    // else{
    //     message = <h1>bye</h1>
    // }

    // return (
    //     <div>
    //         {message}
    //     </div>
    // )

    // if (this.state.user){
    //     return (
    //         <div>
    //           <div>Welcome</div>
    //         </div>
    //       )
    // }
    // else{
    //     return (
    //         <div>
    //           <div>bye</div>
    //         </div>
    //     )
    // }

    // return (
    //   <div>
    //     <div>Welcome</div>
    //     <div>bye</div>
    //   </div>
    // )
  }
}

export default Conditional