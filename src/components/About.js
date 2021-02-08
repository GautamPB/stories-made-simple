import React from 'react'
import '../styles/About.css'
import ratna from '../ratna.png'

function About() {
    return (
        <div className="about">
            <div className="about__title">
                <h1>Stories Made Simple</h1>
            </div>

            <div className="about__content">
                <p>About</p>
                <div className="about__stuff">
                    <img className="about__image" src={ratna} alt="" />
                    <div className="about__me">
                        <h1>Meet Ratna, an avid reader and aspiring writer</h1>
                        <p>
                            ashfjkasfhjskfhsahflsfhsjkfhsaljkfhsfljsahfjsafhlkass
                            fashjfgsafhasjkfhsaljkfhsaljfhksafkljsahflsafsa
                            fasfhjshfjsafhwiufhukwrw fsjhdhjfbslafsa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
