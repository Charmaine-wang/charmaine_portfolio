import React from 'react';
import "./Main.css";
import Name from "../Name";
// import ReactFullpage from '@fullpage/react-fullpage';

const Main = (props) => { 
    return (

<div className="wrap">
    <Name />
    <div className="cube">
        <div className="front"></div>
        <div className="back"></div>
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="left"></div>
        <div className="right"></div>
    </div>

</div>
    )

}
export default Main
