import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import '../styles/PostContent.css'

const PostContent = () => {
    const history = useHistory()
    const { content } = useParams()

    const [title, setTitle] = useState('')

    const [para1, setPara1] = useState('')
    const [img1, setImg1] = useState('')

    const postStory = () => {
        console.log('Story Posted!')
        console.log(title)
        console.log(para1)
    }

    const postPoem = () => {
        console.log('Poem Posted!')
        console.log(title)
        console.log(para1)
    }

    const postData = (e) => {
        e.preventDefault()
        if (content === 'story') {
            postStory()
        } else if (content === 'poem') {
            postPoem()
        }
        history.push('/')
    }

    return (
        <div className="postContent">
            <h1>New {content}</h1>
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
                        <h3>Paragraph 1</h3>
                        <textarea
                            name="para1"
                            rows="10"
                            cols="200"
                            value={para1}
                            onChange={(e) => {
                                setPara1(e.target.value)
                            }}
                        />
                        <h3>Image 1</h3>
                        <input
                            value={img1}
                            onChange={(e) => setImg1(e.target.value)}
                        />
                    </div>

                    <br />
                    <br />
                </form>

                <Button onClick={postData}>Post</Button>
            </div>
        </div>
    )
}

export default PostContent
