import React from 'react'
import '../styles/MainContent.css'
import BookIcon from '@material-ui/icons/Book'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AssignmentIcon from '@material-ui/icons/Assignment'
import RateReviewIcon from '@material-ui/icons/RateReview'

function MainContent() {
    return (
        <div class="mainContent">
            <div className="mainContent__imageRow">
                <div className="image">
                    <img
                        src="https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg"
                        alt=""
                    />
                    <div className="content">
                        <div className="stuff">
                            <BookIcon />
                            <h1>Stories</h1>
                        </div>
                    </div>
                </div>

                <div className="image">
                    <img
                        src="https://i.pinimg.com/originals/a1/2a/81/a12a81a4f1745cf4dd7929498b589b41.jpg"
                        alt=""
                    />

                    <div className="content">
                        <div className="stuff">
                            <MusicNoteIcon />
                            <h1>Poems</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainContent__imageRow">
                <div className="image">
                    <img
                        src="https://iodigital.io/wp-content/uploads/2019/03/rating.jpg"
                        alt=""
                    />
                    <div className="content">
                        <div className="stuff">
                            <RateReviewIcon />
                            <h1>Reviews</h1>
                        </div>
                    </div>
                </div>

                <div className="image">
                    <img
                        src="https://writology.com/userdata/faq/write.jpg"
                        alt=""
                    />
                    <div className="content">
                        <div className="stuff">
                            <AssignmentIcon />
                            <h1>Articles</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
