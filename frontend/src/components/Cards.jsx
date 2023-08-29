import { React } from "react";
import './Cards.css'
import { useNavigate } from 'react-router-dom'

function Cards({ invtry }) {

    const { id, title, price, category, stock, image } = invtry
    return (

        <article id={id} className='box-container' onClick={() => useNavigate('/')}>
            <h1>{title}</h1>
            {/* <p className='image-container'><img src={image} alt="image" /></p> */}
            <h3>{category} </h3>
            <h5>${price}</h5>
            <h5>{stock}</h5>
        </article>
    )

}

export default Cards;