import { React } from "react";
import './Cards.css'
import { useNavigate } from 'react-router-dom'

function Cards({ title, image }) {

    return (

        <article className='box-container' onClick={() => useNavigate('/')}>
            <h1 className="title-container" >{title}</h1>
            <img src={image} alt="image" className='image-container'/>
        </article>
    )
}

export default Cards;