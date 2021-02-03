import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import '../styles/PostContent.css'

const PostContent = () => {
    const history = useHistory()
    const { content } = useParams()

    const [title, setTitle] = useState('')

    const [postContent, setPostContent] = useState('')

    const postStory = () => {
        console.log('Story Posted!')
        console.log(title)
        console.log(PostContent)
    }

    const postPoem = () => {
        console.log('Poem Posted!')
        console.log(title)
        console.log(postContent)
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
