import React from 'react'
import '../styles/Reviews.css'
import logo from '../Logo_1.png'

function Reviews() {
    return (
        <div className="reviews">
            <div className="reviews__image">
                <img src={logo} alt="" />
            </div>

            <div className="reviews__content">
                <h1>The reviews are coming soon!</h1>
            </div>
        </div>
    )
}

export default Reviews
