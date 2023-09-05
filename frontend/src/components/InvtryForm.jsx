import React, { useState } from "react";
import { addInvtry } from "../services/inventoryServices";

function InvtryForm() {
    



    return (
        <form action="" method="post" /* onSubmit={handleSubmit} */>
            <label htmlFor="code">
                Código de producto
                <input type="text" name="code" id="code" required />
            </label>
            <label htmlFor="product">
                Nombre del producto
                <input type="text" name="product" id="product" required />
            </label>
            <label htmlFor="description">
                Descripción
                <input type="text" name="description" id="description" required />
            </label>
            <label htmlFor="price">
                Precio
                <input type="text" name="price" id="price" required />
            </label>
            <label htmlFor="item">
                Categoría del producto
                <select name="item" id="item">
                    <option value="Ferretería">Ferretería</option>
                    <option value="Tranquera">Tranqueras</option>
                    <option value="ropa trabajo">Ropa de Trabajo</option>
                </select>
            </label>
            <label htmlFor="amount">
                Unidades de producto
                <input type="text" name="amount" id="amount" required />
            </label>
            <label htmlFor="imagenes">
                Imagen descriptiva (copia y pega una ruta de internet)
                <input type="text" name="imagenes" id="imagenes" required />
            </label>

            <input type="submit" value="Enviar" />
            <input type="button" value="Volver" />

        </form>
    )
}

export default InvtryForm;