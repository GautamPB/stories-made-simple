import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Comment.css'

const Comment = ({ username, profilePic, message }) => {
    return (
        <div className="comment">
            <div className="commenter__top">
                <Avatar src={profilePic} />
                <h3>{username}</h3>
            </div>

            <div className="commenter__body">{message}</div>
        </div>
    )
}

export default Comment
