import React from 'react'
import '../styles/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import HourglassFullIcon from '@material-ui/icons/HourglassFull'
import InfoIcon from '@material-ui/icons/Info'
import logo from '../Logo_1.png'
import { Avatar } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {
    const history = useHistory()

    const [{ user }] = useStateValue()

    const handleLogout = () => {
        if (user) {
            window.location.reload()
            history.push('/')
        } else {
            history.push('/login')
        }
    }

    return (
        <div className="header">
            <Link to="/" className="header__link">
                <div className="header__logo">
                    <img src={logo} alt="" />
                    <p>TALES . MYTHS . LEGENDS</p>
                </div>
            </Link>

            <div className="header__options">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <HomeIcon />
                        <h4>Home</h4>
                    </div>
                </Link>

                <Link to="/about" className="header__link">
                    <div className="header__option">
                        <InfoIcon />
                        <h4>About</h4>
                    </div>
                </Link>

                <Link to="/stories" className="header__link">
                    <div className="header__option">
                        <BookIcon />
                        <h4>Stories</h4>
                    </div>
                </Link>

                <Link to="/poems" className="header__link">
                    <div className="header__option">
                        <MusicNoteIcon />
                        <h4>Poems</h4>
                    </div>
                </Link>

                <Link to="/history" className="header__link">
                    <div className="header__option">
                        <HourglassFullIcon />
                        <h4>History</h4>
                    </div>
                </Link>
            </div>

            <div className="header__userInfo" onClick={handleLogout}>
                <Link to={user ? '/' : '/login'} className="header__userInfo">
                    <Avatar
                        className="user__pic"
                        src={user ? user.photoURL : ''}
                    />
                    <div className="logout__user">
                        <p>{user ? 'Logout,' : ''}</p>
                        <h3 className="user">
                            {user ? user.displayName : 'Login'}
                        </h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
