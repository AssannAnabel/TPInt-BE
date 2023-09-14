import './Not_Found.css';
import Header from './Header';
import Footer from './Footer';

function NotFound() {
    return (
        <>
        <Header/>
        <main className='not-found-container'>
            <h1 className='not-found-title'>Página no Encontrada</h1>
            <img src="../404.jpg" alt="404" className="not-found-image" />
        </main>
        <Footer/>
        </>
    )
}
export default NotFound