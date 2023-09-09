import { React } from "react";
import './Cards.css'
import { Link, useNavigate } from 'react-router-dom'

function Cards({ title, image }) {

    const navigate = useNavigate()

    return (

        <article className='box-container'>
            <Link to={"/allProducts"} />
            <h1 className="title-container" >{title}</h1>
            <img src={image} alt="image" className='image-container'/>
        </article>
    )
}

export default Cards;