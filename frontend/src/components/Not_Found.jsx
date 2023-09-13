import './Not_Found.css';
import Header from './Header';
import Footer from './Footer';

function NotFound() {
    return (
        <>
        <Header/>
        <body >
            <h1>Pagina no Encontrada</h1>
            <img src="../404.jpg" alt="404" className="body" />
        </body>
        <Footer/>
        </>
    )
}
export default NotFound