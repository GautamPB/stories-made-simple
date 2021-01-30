import React from 'react'
import '../styles/History.css'
import logo from '../Logo_1.png'

function History() {
    return (
        <div className="history">
            <div className="history__image">
                <img src={logo} alt="" />
            </div>

            <div className="history__content">
                <h1>This content is coming soon!</h1>
            </div>
        </div>
    )
}

export default History
