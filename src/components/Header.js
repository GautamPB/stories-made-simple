import React from 'react'
import '../styles/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AssignmentIcon from '@material-ui/icons/Assignment'
import RateReviewIcon from '@material-ui/icons/RateReview'
import InfoIcon from '@material-ui/icons/Info'
import logo from '../Logo_1.png'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="header__top">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>

                <div className="header__options">
                    <Link to="/">
                        <div className="header__option">
                            <HomeIcon />
                            <h3>Home</h3>
                        </div>
                    </Link>

                    <Link to="/about">
                        <div className="header__option">
                            <InfoIcon />
                            <h3>About</h3>
                        </div>
                    </Link>

                    <Link to="/stories">
                        <div className="header__option">
                            <BookIcon />
                            <h3>Stories</h3>
                        </div>
                    </Link>

                    <Link to="/poems">
                        <div className="header__option">
                            <MusicNoteIcon />
                            <h3>Poems</h3>
                        </div>
                    </Link>

                    <Link to="/articles">
                        <div className="header__option">
                            <AssignmentIcon />
                            <h3>Articles</h3>
                        </div>
                    </Link>

                    <Link to="/reviews">
                        <div className="header__option">
                            <RateReviewIcon />
                            <h3>Reviews</h3>
                        </div>
                    </Link>
                </div>

                <div className="header__userInfo">
                    <Avatar />
                    <h3>Username</h3>
                </div>
            </div>

            <div className="header__slogan">
                <h1>TALES . MYTHS . LEGENDS</h1>
            </div>
        </div>
    )
}

export default Header
