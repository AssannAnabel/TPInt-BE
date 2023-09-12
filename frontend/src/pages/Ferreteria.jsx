import { useContext, useState } from 'react'
import { InvtryCtx } from '../context/inventoryContext';
import { formatPrice } from '../utils/fomatPrice';
import { IoIosAdd } from "react-icons/Io"
import { BiMinus } from "react-icons/Bi"
import { AiFillDelete, AiFillEdit } from "react-icons/Ai"
import { deleteInvtry, getInvtryByItem } from '../services/inventoryServices';

function Ferreteria() {
    const { invtry, error, isLoading } = useContext(InvtryCtx);

    const [itemFerreteria, setItemFerreteria] = useState

    const  itemsFerreteria = async() =>{
        try {
            const res = await getInvtryByItem('ropa trabajo');
            console.log(res);            
            return res
            // Aquí puedes procesar el array o realizar otras acciones con los datos.
        } catch (error) {
            // Maneja el error si la promesa es rechazada
            console.error(error);
        }
    }

    //const items = getInvtryByItem('ropa trabajo')
    console.log(itemsFerreteria);


    if (isLoading) return <div className='loader'>{isLoading}</div>;
    if (error) return <div><h1>{error}</h1></div>;
    return (
        <>
            <section className='layout'>
                <div className="table-container">
                    <h1>Lista de Productos</h1>
                    <table className="produc-table">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Productos</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Rubro</th>
                                <th>Cantidad disponible</th>
                                <th>Imagen</th>
                                <th>Agregar o Quitar</th>
                                <th>Modificar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsFerreteria.map((itemsFerreteria) => (
                                <tr key={itemsFerreteria.id}>
                                    <td>{itemsFerreteria.code}</td>
                                    <td>{itemsFerreteria.product} </td>
                                    <td>{itemsFerreteria.description}</td>
                                    <td>${formatPrice(itemsFerreteria.price)}</td>
                                    <td>{itemsFerreteria.item}</td>
                                    <td>{itemsFerreteria.qty}</td>
                                    <td> <img src={`${itemsFerreteria.images}`} alt={itemsFerreteria.product} width="100"></img></td>
                                    <td><button><IoIosAdd /></button> <button><BiMinus /></button></td>
                                    <td><button className='button-edit' ><AiFillEdit /></button></td>
                                    <td><button onClick={() => deleteInvtry(itemsFerreteria)}><AiFillDelete /> </button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}


export default Ferreteria;