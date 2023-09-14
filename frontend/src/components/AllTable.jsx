import { useContext, useState } from 'react'
import { InvtryCtx } from '../context/inventoryContext';
import './AllTable.css'
import { formatPrice } from '../utils/fomatPrice';
import { AiFillDelete, AiFillEdit } from "react-icons/Ai"
import { URL_invtry, deleteInvtry, updateInvtryById } from '../services/inventoryServices';



function AllTable() {

    const { invtry, error, isLoading } = useContext(InvtryCtx);
    const [editedProduct, setEditedProduct] = useState(null);
    //la palabra de la busqueda que escribo en el input
    const [search, setSearch] = useState("");
    //guardamos los productos buscados
    const [searchUser, setSearchUser] = useState([])
    //ordena por precio
    const [sortedPrice, setSortedPrice] = useState([])

    const handleInputChange = (field, value) => {
        let parsedValue = value;
        if (field === 'qty' || field === 'price') {
            parsedValue = parseFloat(value);
        }

        setEditedProduct({
            ...editedProduct,
            [field]: parsedValue,
        });
        console.log("PROD", editedProduct);
    };

    const handleEditClick = (invtry) => {
        setEditedProduct(invtry);
        modal.showModal()
    };

    const handleSaveClick = async () => {
        if (editedProduct) {
            const updatedQty = parseInt(editedProduct.qty, 10);
            const updatedProduct = {
                ...editedProduct,
                qty: updatedQty,
            };
            try {
                const updatedProductResponse = await updateInvtryById(editedProduct.id, updatedProduct);
                console.log('Producto actualizado:', updatedProductResponse);
                //window.location.reload()
            } catch (error) {
                console.error('Error al actualizar el producto:', error);
            }
        }
        setEditedProduct(null);
    };

    const handleCancelClick = () => {
        setEditing(false);
        setEditedProduct(null);
    };

    //handle pertenecientes al input de busqueda
    const handleSearch = () => {
        const filtered = invtry.filter((item) =>
            item.product.toLowerCase().includes(search.toLowerCase())
            
        );
        console.log(filtered);
        setSearchUser(filtered.slice(0, 10)); // Limitar a los primeros 10 resultados
    };

    const handleSort = () => {
        const sorted = invtry.sort((a, b) => a.price - b.price);
        setSortedPrice(sorted)
    }

    const handleReset = () => {
        //setMenus(menus);
        setSearch('');
        window.location.reload()
    };

    return (
        <>
            <div>
                <h2 className='title2-description'>Busca por producto</h2>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch} className='busqueda'>Buscar</button>
                <button onClick={handleSort} className='busqueda'>Ordenar por precio</button>
                <button onClick={handleReset} className='busqueda'>Limpiar Busqueda</button>
            </div>
            <section className='layout'>
                <div className="table-container">
                    <h1>Lista de Productos</h1>
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Productos</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Rubro</th>
                                <th>Cantidad disponible</th>
                                <th>Imagen</th>
                                <th>Modificar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invtry.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.code}</td>
                                    <td>{product.product}</td>
                                    <td>{product.description}</td>
                                    <td>${formatPrice(product.price)}</td>
                                    <td>{product.item}</td>
                                    <td>{product.qty}</td>
                                    <td><img src={product.images} alt={product.product} width="100" /></td>
                                    <td>
                                        <button className='button-edit' onClick={() => handleEditClick(product)}><AiFillEdit /></button>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteInvtry(product)}><AiFillDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {editedProduct && (
                    <div className='edit-form'>
                        <dialog id="modal">
                            <h2>Editar Producto</h2>
                            <form action="" method="dialog" id="form">
                                <input
                                    type="text"
                                    value={editedProduct.code}
                                    onChange={(e) => handleInputChange("code", e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={editedProduct.product}
                                    onChange={(e) => handleInputChange("product", e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={editedProduct.description}
                                    onChange={(e) => handleInputChange("description", e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={editedProduct.price}
                                    onChange={(e) => handleInputChange("price", Number(e.target.value))}
                                />
                                <input
                                    type="text"
                                    value={editedProduct.item}
                                    onChange={(e) => handleInputChange("item", e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={editedProduct.qty}
                                    onChange={(e) => handleInputChange("qty", e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={editedProduct.images}
                                    onChange={(e) => handleInputChange("images", e.target.value)}
                                />
                                <button onClick={handleSaveClick}>Guardar</button>
                                <button onClick={handleCancelClick}>Cancelar</button>
                            </form>
                        </dialog>
                    </div>
                )}
            </section>
        </>
    );
}

export default AllTable;