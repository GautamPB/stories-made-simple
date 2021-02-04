import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Comment.css'

const Comment = ({ comment }) => {
    //put user as a parameter

    const user = null

    return (
        <div className="comment">
            <div className="commenter__top">
                <Avatar />
                <h3>{user}</h3>
            </div>

            <div className="commenter__body">{comment}</div>
        </div>
    )
}

export default Comment
