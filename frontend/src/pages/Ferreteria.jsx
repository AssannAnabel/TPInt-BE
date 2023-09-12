import { useContext, useState } from 'react'
import { InvtryCtx } from '../context/inventoryContext';
import { formatPrice } from '../utils/fomatPrice';
import { IoIosAdd } from "react-icons/Io"
import { BiMinus } from "react-icons/Bi"
import { AiFillDelete, AiFillEdit } from "react-icons/Ai"
import { deleteInvtry, getInvtryByItem } from '../services/inventoryServices';

function Ferreteria() {
    const { invtry, error, isLoading } = useContext(InvtryCtx);
    
    const [itemFerreteria, setItemFerreteria] = useState([])
    
    const  itemsFerreteria = async() =>{
        try {
            const res = await getInvtryByItem('ropa trabajo');
            console.log(res);  
            setItemFerreteria(res)          
            return res
            // Aquí puedes procesar el array o realizar otras acciones con los datos.
        } catch (error) {
            // Maneja el error si la promesa es rechazada
            console.error(error);
        }
    }
    
    //const items = getInvtryByItem('ropa trabajo')
    //console.log(res);


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
                            {itemFerreteria.map((itemFerreteria) => (
                                <tr key={itemFerreteria.id}>
                                    <td>{itemFerreteria.code}</td>
                                    <td>{itemFerreteria.product} </td>
                                    <td>{itemFerreteria.description}</td>
                                    <td>${formatPrice(itemFerreteria.price)}</td>
                                    <td>{itemFerreteria.item}</td>
                                    <td>{itemFerreteria.qty}</td>
                                    <td> <img src={`${itemFerreteria.images}`} alt={itemFerreteria.product} width="100"></img></td>
                                    <td><button><IoIosAdd /></button> <button><BiMinus /></button></td>
                                    <td><button className='button-edit' ><AiFillEdit /></button></td>
                                    <td><button onClick={() => deleteInvtry(itemFerreteria)}><AiFillDelete /> </button></td>
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