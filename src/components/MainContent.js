import React from 'react'
import '../styles/MainContent.css'
import BookIcon from '@material-ui/icons/Book'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import HourglassFullIcon from '@material-ui/icons/HourglassFull'
import { Link } from 'react-router-dom'

function MainContent() {
    return (
        <div class="mainContent">
            <div className="mainContent__imageRow">
                <Link to="/stories" className="image">
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
                </Link>
            </div>

            <div className="mainContent__imageRow">
                <Link to="/poems" className="image">
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
                </Link>

                <Link to="/history" className="image">
                    <img
                        src="https://akm-img-a-in.tosshub.com/indiatoday/indusvalleyscript1_121413124820.jpg?LzXpdozaBRAAwKQuch7H9qQGtZ2k2zrk&size=1200:675"
                        alt=""
                    />
                    <div className="content">
                        <div className="stuff">
                            <HourglassFullIcon />
                            <h1>History</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MainContent
