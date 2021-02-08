import React, { useState, useEffect } from 'react'
import '../styles/Poems.css'
import db from '../firebase'
import ContentTitle from './ContentTitle'

function Poems() {
    const [poems, setPoems] = useState([])

    useEffect(() => {
        db.collection('poems').onSnapshot((snapshot) =>
            setPoems(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])

    return (
        <div className="poems">
            {poems.map((poem) => (
                <ContentTitle
                    title={poem.data.contentTitle}
                    timestamp={poem.data.timestamp}
                />
            ))}
        </div>
    )
}

export default Poems
