import React from 'react'
import './Login.css'
import ImageOne from '../src/images/spotify.png'

function Login() {
    return (
        <div className="login">
            <img src={ImageOne} alt=""/>
            <a>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
