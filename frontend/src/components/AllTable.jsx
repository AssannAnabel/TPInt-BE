import { useContext } from 'react'
import { InvtryCtx } from '../context/inventoryContext';
//import { IoIosAdd } from "react-icons/Io"
//import { BiMinus } from "react-icons/Bi"
//import { AiFillDelete, AiFillEdit } from "react-icons/Ai"

function Home() {
    const { invtry, error, isLoading } = useContext(InvtryCtx);
    console.log(invtry);


    return (
        <>
            <section className='layout'>
                {
                    <div className="table-container">
                        <table className="produc-table">
                            <thead>
                                <h1>Lista de Productos</h1>
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
                                        <td>${invtry.price}</td>
                                        <td>{invtry.item}</td>
                                        <td>{invtry.qty}</td>
                                        <td> <img src={`${invtry.images}`} alt="imagen" width="100"></img></td>
                                        {/* <td><button><IoIosAdd /></button> <button><BiMinus /></button></td>
                                        <td><button className='button-edit' ><AiFillEdit /></button></td>
                                        <td><button ><AiFillDelete /> </button></td> */}
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                }
            </section>
        </>
    )
}


export default Home;