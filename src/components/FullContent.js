import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import Commenter from './Commenter'
import '../styles/FullContent.css'
import db from '../firebase'

function FullContent() {
    const { title } = useParams()

    const [comments, setComments] = useState([]) //empty array of comments

    const [stories, setStory] = useState([])

    const [poems, setPoem] = useState([])

    const text = ''

    useEffect(() => {
        db.collection('stories')
            .where('contentTitle', '==', title)
            .onSnapshot((snapshot) =>
                setStory(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    }, [])

    useEffect(() => {
        db.collection('poems')
            .where('contentTitle', '==', title)
            .onSnapshot((snapshot) =>
                setPoem(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    }, [])

    useEffect(() => {
        db.collection('comments')
            .where('blogTitle', '==', title)
            .onSnapshot((snapshot) =>
                setComments(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    }, [])

    return (
        <div className="fullContent">
            <div className="fullContent__top">
                <Avatar src="https://lh3.googleusercontent.com/a-/AOh14Gi1SqiVNRARrLdtr7VhpyzoaLsW46JWKT5dAcSkNg=s96-c" />
                <div className="fullContent__details">
                    <h1>
                        {stories.length
                            ? stories.map((story) => story.data.contentTitle)
                            : poems.map((poem) => poem.data.contentTitle)}
                    </h1>
                </div>
            </div>

            <textarea
                rows="100"
                cols="150"
                readOnly="true"
                className="fullContent__body"
                placeholder={
                    stories.length
                        ? stories.map((story) => story.data.contentBody)
                        : poems.map((poem) => poem.data.contentBody)
                }
            ></textarea>

            <Commenter title={title} />

            {comments.map((comment) => (
                <Comment
                    username={comment.data.username}
                    profilePic={comment.data.profilePic}
                    message={comment.data.message}
                />
            ))}
        </div>
    )
}

export default FullContent
