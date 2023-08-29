import { useContext } from 'react'
import { InvtryCtx } from '../context/inventoryContext';
import Cards from '../components/Cards';
import './Home.css'
import Carousel from '../components/Carousel';

import Header from '../components/header';

function Home() {
  const { invtry, error, isLoading } = useContext(InvtryCtx);
  console.log(invtry);


  if (isLoading) return <div className='loading-format'><h1>loading...</h1></div>;
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