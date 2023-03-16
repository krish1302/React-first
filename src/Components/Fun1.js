import React from "react";

function Fun1(props){
    
    console.log(props)
    // useState

    function clickme(){
        console.log('value clicked')
    }

    return (
        <div>
           <h1>Hi {props.name}, How is your work as {props.work}</h1> 
           <button onClick={() => clickme()}>Click me</button>
        </div>
    )
}

export default Fun1