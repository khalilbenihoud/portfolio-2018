import React from 'react'
import './Card.css'

const Card = props => (
    <div className="Card">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <span>{props.sub}</span>
    </div>
)

export default Card