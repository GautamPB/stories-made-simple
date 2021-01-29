import React from 'react'
import '../styles/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AssignmentIcon from '@material-ui/icons/Assignment'
import RateReviewIcon from '@material-ui/icons/RateReview'
import logo from '../Logo_1.png'
import { Avatar } from '@material-ui/core'

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>

            <div className="header__options">
                <div className="header__option">
                    <HomeIcon />
                    <h3>Home</h3>
                </div>

                <div className="header__option">
                    <BookIcon />
                    <h3>Stories</h3>
                </div>

                <div className="header__option">
                    <MusicNoteIcon />
                    <h3>Poems</h3>
                </div>

                <div className="header__option">
                    <AssignmentIcon />
                    <h3>Articles</h3>
                </div>

                <div className="header__option">
                    <RateReviewIcon />
                    <h3>Reviews</h3>
                </div>
            </div>

            <div className="header__userInfo">
                <Avatar />
                <h3>Username</h3>
            </div>
        </div>
    )
}

export default Header
