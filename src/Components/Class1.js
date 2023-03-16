import React, {Component} from "react";


class Class1 extends Component{

    constructor(props){
        super(props)

        this.state = {
            name : this.props.name,
            work : this.props.work
        }
    }

    clickme(){
        this.setState({
            name: "krish",
            work: "Data Engineer"
        })
        console.log('clicked')
    }


    render(){
        return (
            <div>
                <h1>Hi {this.state.name}, How is your work as {this.state.work}</h1> 
                <button onClick={()=> this.clickme()}>Clickme</button>
            </div>
        )
    }
}

export default Class1;