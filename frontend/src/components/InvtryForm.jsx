import React from "react";
import "./InvtryForm.css"
import { addInvtry } from "../services/inventoryServices";
import { Link, useNavigate } from "react-router-dom";


function InvtryForm() {

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        let newProduct = {
            code: e.target.code.value,
            product: e.target.product.value,
            description: e.target.description.value,
            price: Number(e.target.price.value),
            item: e.target.item.value,
            qty: Number(e.target.qty.value),
            images: e.target.images.value,
        }
        await addInvtry(newProduct);
        navigate('/allProducts')
    }

    function handleChange(e) {
        e.preventDefault();
        const product = ((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        return product
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="code" className="form-label">
                Código de producto
                <input type="text" name="code" id="code" required
                    className="form-input"
                    onChange={handleChange} />
            </label>
            <label htmlFor="product" className="form-label">
                Nombre del producto
                <input type="text" name="product" id="product" required
                    className="form-input"
                    onChange={handleChange} />
            </label>
            <label htmlFor="description" className="form-label">
                Descripción
                <input type="text" name="description" id="description" required
                    className="form-input"
                    onChange={handleChange} />
            </label>
            <label htmlFor="price" className="form-label">
                Precio
                <input type="number" name="price" id="price" required
                    className="form-input"
                    onChange={handleChange} />
            </label>
            <label htmlFor="item" className="form-label">
                Categoría del producto
                <select name="item" id="item"
                    className="form-input"
                    onChange={handleChange}>
                    <option value="Ferretería">Ferretería</option>
                    <option value="Tranquera">Tranqueras</option>
                    <option value="ropa trabajo">Ropa de Trabajo</option>
                </select>
            </label>
            <label htmlFor="qty" className="form-label">
                Unidades de producto
                <input type="number" name="qty" id="qty" required
                    className="form-input"
                    onChange={handleChange} />
            </label>
            <label htmlFor="images" className="form-label">
                Imagen descriptiva (copia y pega una ruta de internet)
                <input type="text" name="images" id="images" required
                    className="form-input"
                    onChange={handleChange} />
            </label>

            <div className="form-buttons">
                <input type="submit" value="Enviar" className="form-button" />
                <button className="form-button"><Link to={"/"}>Volver</Link></button>
                <input type="reset" value="Limpiar" className="form-button" />

            </div>


        </form>
    )
}

export default InvtryForm;