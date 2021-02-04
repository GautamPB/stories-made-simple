import { Avatar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import '../styles/Commenter.css'

const Commenter = () => {
    const [comment, setComment] = useState('')

    const user = null

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

            {user ? (
                <Button onClick={addComment}>Comment</Button>
            ) : (
                <>
                    <p>You must be logged in to leave a comment!</p>
                    <Link to="/login" className="commenter__link">
                        <Button>Login</Button>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Commenter
