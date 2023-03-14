import React from "react";

function Fun1(props){
    console.log(props)
    return (
        <div>
           <h1>Hi {props.name}, How is your work as {props.work}</h1> 
        </div>
    )
}

export default Fun1