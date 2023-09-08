import { useContext } from 'react'
import { InvtryCtx } from '../context/inventoryContext';
import Cards from '../components/Cards';
import './Home.css'
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const { invtry, error, isLoading } = useContext(InvtryCtx);
  console.log(invtry);


  if (isLoading) return <div className='loader'></div>;
  if (error) return <div><h1>{error}</h1></div>;
  return (
    <>
      <Header />
      <Carousel />
      <h2 className='title-stock'>Control de Stock</h2>
      <section className='layout'>
        <Cards title={"Todos los productos"} image={"https://www.senasa.gob.ar/sites/default/files/styles/flexslider_full/public/noticias/imagenes/bpa1_1.jpg?itok=b3bZuimO"} />
        <Cards title={"Ferretería"} image={"https://blog.deacero.com/hs-fs/hubfs/productos%20de%20ferreteria%20herramientas%20manuales.jpg?width=755&name=productos%20de%20ferreteria%20herramientas%20manuales.jpg"}/>
        <Cards title={"Ropa Trabajo"} image={"https://dsiproteccion.com/wp-content/uploads/2020/05/campo-450x450.png"}/>
        <Cards title={"Tranqueras"} image={"https://http2.mlstatic.com/D_NQ_NP_988705-MLA31642922411_072019-O.webp"}/>
      </section>
      <Footer/>
    </>
  )
}


export default Home;