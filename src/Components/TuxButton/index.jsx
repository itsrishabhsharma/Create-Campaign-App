import React, { Component } from 'react';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            type:"primary",
            disabled:"",
        }
    }

    static getDerivedStateFromProps(nextProps){

    }

  render() {
      let {children}=this.props;
      let {type}=this.state;
      let buttonProps={
          className:type
      };
    return (
      <>
        <button {...buttonProps}>{children}</button>

        <style jsx>{`
            button{
                transition:0.5s;
                box-shadow:0px 0px 3px black;
                outline:none !important;
            }
            button.primary:hover{
                box-shadow:0px 3px 4px #0057a7b5;
                // opacity:0.8;
            }
            .primary{
                background-color:#0057A7;
                color:white;
                width:100%;
                height:2.5em;
                border:none;
                cursor:pointer;
                font-weight:bold;
                border-radius:3px;
            }
        `}</style>
      </>
    )
  }
}
