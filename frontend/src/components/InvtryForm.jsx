import React, { useState } from "react";
import "./InvtryForm.css"
import { URL_invtry } from "../services/inventoryServices";
import { Link } from "react-router-dom";

function InvtryForm() {

    const [newInvtryForm, setNewInvtryForm] = useState({})

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch(URL_invtry, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newInvtryForm)
            });
            if (res.ok) return `Success`
            console.log(newInvtryForm);
            //const parsed = await res.json()
            //setNewInvtryForm(parsed);
        } catch (err) {
            throw new Error(err);
        }

    }

    function handleChange(e) {
        e.preventDefault();
        setNewInvtryForm((newInvtryForm) => ({
            ...newInvtryForm,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="code" className="form-label">
                Código de producto
                <input type="text" name="code" id="code" placeholder="Código de producto" required
                    className="form-input"
                    //value={newInvtryForm.code}
                    onChange={handleChange} />
            </label>
            <label htmlFor="product" className="form-label">
                Nombre del producto
                <input type="text" name="product" id="product" required
                    className="form-input"
                    //value={newInvtryForm.product}
                    onChange={handleChange} />
            </label>
            <label htmlFor="description" className="form-label">
                Descripción
                <input type="text" name="description" id="description" required
                    className="form-input"
                    //value={newInvtryForm.description}
                    onChange={handleChange} />
            </label>
            <label htmlFor="price" className="form-label">
                Precio
                <input type="text" name="price" id="price" required
                    className="form-input"
                    //value={newInvtryForm.price}
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
                <input type="text" name="qty" id="qty" required
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