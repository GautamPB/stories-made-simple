import React, { useState, useEffect } from 'react'
import '../styles/Stories.css'
import ContentTitle from './ContentTitle'
import db from '../firebase'

function Stories() {
    const [stories, setStories] = useState([])

    useEffect(() => {
        db.collection('stories').onSnapshot((snapshot) =>
            setStories(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])

    return (
        <div className="stories">
            {stories.map((story) => (
                <ContentTitle
                    title={story.data.contentTitle}
                    timestamp={story.data.timestamp}
                />
            ))}
        </div>
    )
}

export default Stories
