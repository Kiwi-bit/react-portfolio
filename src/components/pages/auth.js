import React, { Component } from 'react';
import Login from "../auth/login";
import LoginPic from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div 
                    className="left-column"
                    style={{
                    backgroundImage: `url(${LoginPic})`
                    }}
                    />

                
            
                <div className="right-column">
                    <Login />
                </div>
            </div>
        );
    }
}