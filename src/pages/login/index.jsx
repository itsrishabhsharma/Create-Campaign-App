import React, { Component } from 'react';
import TuxButton from '../../Components/TuxButton';
import { LoadingOutlined } from '@ant-design/icons';
import './style.css';
import cookies from 'react-cookies';
import { withRouter } from 'react-router';

class index extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            password:"",
            loading:false
        }
    }


    signIn(e){
        e.preventDefault();
        this.setState({loading:true})
        var self=this;
        cookies.save('logged',true);
        setTimeout(() => {
           
            self.props.history.push("/");
        }, 700);
    }

    render() {
        return (
            <div className="loginContainer">
                    <div className="textPart">
                        <h2>IDEATION MANAGEMENT</h2><br/>
                        <span>Manage your idea on the go</span>
                    </div>
                    <div className="formSection">
                        <form onSubmit={this.signIn.bind(this)}>
                            
                             <input type="text" placeholder="Enter email or username" required />
                             <input type="password" placeholder="Enter password" required />
                             <TuxButton>{this.state.loading?<LoadingOutlined />:"LOGIN"}</TuxButton>
                        </form>
                    </div>
            </div>
        )
    }
}


export default withRouter(index);