import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../Logo_1.png'
import '../styles/Login.css'

const Login = () => {
    const history = useHistory()

    const handleLogin = () => {
        //login logic
        console.log('Login button clicked!')
        history.push('/')
    }

    return (
        <div className="login">
            <div className="login__image">
                <img src={logo} alt="" />
            </div>

            <div className="login__content">
                <h1>TALES . MYTHS . LEGENDS</h1>
            </div>

            <div className="login__button">
                <Button onClick={handleLogin} className="">
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
