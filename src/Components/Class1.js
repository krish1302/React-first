import React, {Component} from "react";

class Class1 extends Component{
    render(){
        return (
            <div>
                <h1>Hi {this.props.name}, How is your work as {this.props.work}</h1> 
            </div>
        )
    }
}

export default Class1;