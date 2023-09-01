import { React } from "react";
import './Cards.css'
import { useNavigate } from 'react-router-dom'

function Cards({ invtry }) {

    const { id, product, price, category, amount, imagenes } = invtry
    return (

        <article id={id} className='box-container' onClick={() => useNavigate('/')}>
            <h1>{product}</h1>
            <p className='image-container'><img src={imagenes} alt="image" /></p>
            <h3>{category} </h3>
            <h5>${price}</h5>
            <h5>{amount}</h5>
        </article>
    )

}

export default Cards;