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

            <div className="fullContent__image">
                <img
                    src={
                        stories.length
                            ? stories.map((story) => story.data.contentImage)
                            : poems.map((poem) => poem.data.contentImage)
                    }
                    alt=""
                />
            </div>

            <textarea
                rows="50"
                cols="150"
                readOnly="true"
                className="fullContent__body"
                placeholder={
                    stories.length
                        ? stories.map((story) => story.data.contentBody)
                        : poems.map((poem) => poem.data.contentBody)
                }
            ></textarea>

            <div className="fullContent__links">
                <h4>
                    {stories.length || poems.length
                        ? 'Check out the audiobook on Spotify'
                        : ''}
                </h4>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={
                        stories.length
                            ? stories.map((story) => story.data.spotifyLink)
                            : poems.map((poem) => poem.data.spotifyLink)
                    }
                >
                    {stories.length
                        ? stories.map((story) => story.data.spotifyLink)
                        : poems.map((poem) => poem.data.spotifyLink)}
                </a>

                <br></br>
                <br></br>

                <h4>
                    {stories.length || poems.length
                        ? 'Check out the audiobook on Amazon Music'
                        : ''}
                </h4>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={
                        stories.length
                            ? stories.map((story) => story.data.amazonLink)
                            : poems.map((poem) => poem.data.amazonLink)
                    }
                >
                    {stories.length
                        ? stories.map((story) => story.data.amazonLink)
                        : poems.map((poem) => poem.data.amazonLink)}
                </a>
            </div>

            <br></br>
            <br></br>

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
