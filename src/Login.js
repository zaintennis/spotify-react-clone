import React from 'react'
import './Login.css'
import ImageOne from '../src/images/spotify.png'
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            <img src={ImageOne} alt=""/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
