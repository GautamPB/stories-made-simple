import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import '../styles/ContentTitle.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from 'react-router-dom'

function ContentTitle({ id, title, timestamp }) {
    return (
        <div className="contentTitle">
            <div className="contentTitle__left">
                <Avatar src="https://twitter.com/Gautam_PB/photo" />
                <div className="content__leftData">
                    <p>timestamp...</p>
                    <Link to={'/content/' + title} className="header__link">
                        <h1>{title}</h1>
                    </Link>
                </div>
            </div>

            <div className="contentTitle__right">
                <Link to={'/content/' + title} className="header__link">
                    <Button className="content__rightData">
                        <h3>Read more...</h3>
                        <ArrowForwardIcon />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ContentTitle
