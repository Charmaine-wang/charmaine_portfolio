import React from 'react'
import "./Arrow.css"

function handleClick (){
    
}


const Arrow = (props) => {

    return (
            <div className="arrow-down">
            <i onClick={props.handleClick} className="fas fa-angle-double-down"></i>
            </div>
    )
} 
export default Arrow