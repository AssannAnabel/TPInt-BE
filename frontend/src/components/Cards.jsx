import { React } from "react";
import './Cards.css'

function Cards({ title, image }) {

    return (

        <article className='box-container'>
            <h1 className="title-container" >{title}</h1>
            <img src={image} alt={title} className='image-container'/>
        </article>
    )
}

export default Cards;