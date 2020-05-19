import React, { Component } from 'react';
import './style.css';

export default class TuxAlerts extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        let props=this.props;
        return (
            <div className={props.type==="secondary"?"alertCont default":props.type==="success"?"alertCont success":props.type==="info"?"alertCont info":props.type==="warning"?"alertCont warning":"alertCont"}>
                <span className={props.type==="secondary"?"alertIc default":props.type==="success"?"alertIc success":props.type==="info"?"alertIc info":props.type==="warning"?"alertIc warning":"alertIc"}>
                   {props.type==="secondary"?"!":props.type==="success"?"S":props.type==="info"?"i":props.type==="warning"?"w":"ic"}
                </span>
                <span className={props.type==="secondary"?"alertText default":props.type==="success"?"alertText success":props.type==="info"?"alertText info":props.type==="warning"?"alertText warning":"alertText"}>
                    <p>{props.heading}</p>
                    <p>{props.children}</p>
                </span>
                
            </div>
        )
    }
}
