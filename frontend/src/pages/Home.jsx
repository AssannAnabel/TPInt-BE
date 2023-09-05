import { useContext } from 'react'
import { InvtryCtx } from '../context/inventoryContext';
import Cards from '../components/Cards';
import './Home.css'
import Carousel from '../components/Carousel';

import Header from '../components/Header';

function Home() {
  const { invtry, error, isLoading } = useContext(InvtryCtx);
  console.log(invtry);


  if (isLoading) return <div className='loader'></div>;
  if (error) return <div><h1>{error}</h1></div>;
  return (
    <>
      <Header />
      <Carousel />
      <section className='layout'>
        {
          invtry.map(invtry => <Cards invtry={invtry} key={invtry.id} />)
        }
      </section>
    </>
  )
}

export default Home;