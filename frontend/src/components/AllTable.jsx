import { useContext } from 'react'
import { InvtryCtx } from '../context/inventoryContext';
import './AllTable.css'
import { formatPrice } from '../utils/fomatPrice';
import { IoIosAdd } from "react-icons/Io"
import { BiMinus } from "react-icons/Bi"
import { AiFillDelete, AiFillEdit } from "react-icons/Ai"
import { deleteInvtry } from '../services/inventoryServices';

function AllTable() {
    const { invtry, error, isLoading } = useContext(InvtryCtx);


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
                            {invtry.map((invtry) => (
                                <tr key={invtry.id}>
                                    <td>{invtry.code}</td>
                                    <td>{invtry.product} </td>
                                    <td>{invtry.description}</td>
                                    <td>${formatPrice(invtry.price)}</td>
                                    <td>{invtry.item}</td>
                                    <td>{invtry.qty}</td>
                                    <td> <img src={`${invtry.images}`} alt={invtry.product} width="100"></img></td>
                                    <td><button><IoIosAdd /></button> <button><BiMinus /></button></td>
                                    <td><button className='button-edit' ><AiFillEdit /></button></td>
                                    <td><button onClick={() => deleteInvtry(invtry)}><AiFillDelete /> </button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}


export default AllTable;