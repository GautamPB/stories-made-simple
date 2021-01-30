import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import '../styles/ContentTitle.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

function ContentTitle({ id, title, timestamp }) {
    return (
        <div className="contentTitle">
            <div className="contentTitle__left">
                <Avatar src="https://twitter.com/Gautam_PB/photo" />
                <div className="content__leftData">
                    <p>timestamp...</p>
                    <h1>{title}</h1>
                </div>
            </div>

            <div className="contentTitle__right">
                <Button className="content__rightData">
                    <h3>Read more...</h3>
                    <ArrowForwardIcon />
                </Button>
            </div>
        </div>
    )
}

export default ContentTitle
