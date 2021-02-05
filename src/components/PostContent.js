import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import db from '../firebase'
import '../styles/PostContent.css'

const PostContent = () => {
    const history = useHistory()
    const { content } = useParams()

    const [title, setTitle] = useState('')

    const [postContent, setPostContent] = useState('')

    const postStory = () => {
        //logic to post story
        db.collection('stories').add({
            contentTitle: title,
            imageURL:
                'https://lh3.googleusercontent.com/a-/AOh14Gi1SqiVNRARrLdtr7VhpyzoaLsW46JWKT5dAcSkNg=s96-c',
            contentBody: postContent,
        })
        setTitle('')
        setPostContent('')
        history.push('/stories')
    }

    const postPoem = () => {
        //logic to post poem
        db.collection('poems').add({
            contentTitle: title,
            imageURL:
                'https://lh3.googleusercontent.com/a-/AOh14Gi1SqiVNRARrLdtr7VhpyzoaLsW46JWKT5dAcSkNg=s96-c',
            contentBody: postContent,
        })
        setTitle('')
        setPostContent('')
        history.push('/poems')
    }

    const postData = (e) => {
        e.preventDefault()
        if (content === 'story') {
            postStory()
        } else if (content === 'poem') {
            postPoem()
        }
        // history.push('/')
        setPostContent('')
    }

    return (
        <div className="postContent">
            <div className="postContent__top">
                <h1>New {content}</h1>
                <div className="postContent__button">
                    <Button onClick={postData}>Upload</Button>
                </div>
            </div>
            <div className="input__content">
                <form className="postContent__form">
                    <div className="form__input">
                        <h1>Title</h1>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="form__input">
                        <h3>Content</h3>
                        <textarea
                            name="content"
                            rows="100"
                            value={postContent}
                            onChange={(e) => {
                                setPostContent(e.target.value)
                            }}
                        />
                    </div>

                    <br />
                    <br />
                </form>
            </div>
        </div>
    )
}

export default PostContent
