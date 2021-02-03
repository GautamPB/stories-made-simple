import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import '../styles/Commenter.css'

const Commenter = () => {
    const [comment, setComment] = useState('')

    const addComment = () => {
        console.log(comment)
        setComment('')
    }

    return (
        <div className="commenter">
            <Avatar />
            <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave a comment..."
            />
            <Button onClick={addComment}>Comment</Button>
        </div>
    )
}

export default Commenter
