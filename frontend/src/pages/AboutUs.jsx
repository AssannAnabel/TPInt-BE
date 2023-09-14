import './AboutUs.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Nosotros() {
    return (
        <>
            <Header />
            <div className='container'>
                <h2>Nosotros</h2>
                <div className='div-p-nosotros'>
                    <p>
                        Somos un grupo de estudiantes de Desarrollo Web Full stack CEPIT.
                        Creamos un Proyecto integrador realizado bajo el framework NestJS, que nos sirve para incorporar todos los conceptos utilizados hasta el momento, como el uso de servidores, HTTP, response, API, etc. La idea principal es poder utilizar métodos CRUD. Integrantes: Assann Anabel, Cordoba Fabricio, Salazar Emiliano.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Nosotros;