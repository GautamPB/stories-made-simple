import { Avatar } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/FullContent.css'

function FullContent() {
    const { title } = useParams()

    return (
        <div className="fullContent">
            <div className="fullContent__top">
                <Avatar />
                <div className="fullContent__details">
                    <h1>{title}</h1>
                    <p>Ratna Prabha</p>
                </div>
            </div>

            <p className="fullContent__body">
                Story content sadjfklsadfjskadfjskadfjsakfsj
                sahdfjsfjsafhsaf\sadjfklsadfjskadfjskadfjsakfsjsajfhsafs
                sjakdhfsa dasfjhasfas fsafhas;fas fsa;lkfhsafhsafa jsahfkjaslhf
                asdfjsahdfsahfjsaf safsjkahfsakjfas fsajdfkbskfd
            </p>
        </div>
    )
}

export default FullContent
