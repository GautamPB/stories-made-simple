import { Avatar } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/FullContent.css'

function FullContent() {
    const { title } = useParams()

    const text = `Line 1 of text content
Line 2 of text content`

    return (
        <div className="fullContent">
            <div className="fullContent__top">
                <Avatar />
                <div className="fullContent__details">
                    <h1>{title}</h1>
                    <p>Ratna Prabha</p>
                </div>
            </div>

            <textarea
                rows="25"
                cols="150"
                readOnly="true"
                className="fullContent__body"
            >
                {text}
            </textarea>
        </div>
    )
}

export default FullContent
