import { Button } from '@material-ui/core'
import React from 'react'
import logo from '../Logo_1.png'
import '../styles/Login.css'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()

    const [user, dispatch] = useStateValue()

    const handleLogin = () => {
        // login logic
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result.user)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                history.push('/')
            })
            .catch((error) => {
                alert(error)
            })
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
                    <div className="google__image">
                        <img
                            src="http://pngimg.com/uploads/google/google_PNG19635.png"
                            alt=""
                        />
                    </div>
                    Login with google
                </Button>
            </div>
        </div>
    )
}

export default Login
