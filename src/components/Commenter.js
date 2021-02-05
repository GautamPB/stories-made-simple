import { Avatar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import '../styles/Commenter.css'
import { useStateValue } from './StateProvider'
import db from '../firebase'

const Commenter = ({ title }) => {
    const [comment, setComment] = useState('')

    const [{ user }, dispatch] = useStateValue()

    const addComment = (e) => {
        e.preventDefault()
        //logic to push a comment to the database

        db.collection('comments').add({
            message: comment,
            profilePic: user.photoURL,
            blogTitle: title,
            username: user.displayName,
        })

        setComment('')
    }

    return (
        <div className="commenter">
            <Avatar src={user ? user.photoURL : ''} />
            <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={
                    user
                        ? `Looking forward to your views, ${
                              user ? user.displayName : ''
                          }.`
                        : 'You must be logged in to leave a comment!'
                }
            />

            {user ? (
                <Button onClick={addComment}>Comment</Button>
            ) : (
                <>
                    <Link to="/login" className="commenter__link">
                        <Button>Login</Button>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Commenter
