import React, { useContext } from "react";
import Header from "../components/Header";
import AllTable from "../components/AllTable"
import Footer from "../components/Footer";
import { InvtryCtx } from "../context/inventoryContext";

function Ferreteria() {
    const { filterFerreteria, error, isLoading } = useContext(InvtryCtx);
    if (isLoading) return <div className='loader'>{isLoading}</div>;
    if (error) return <div><h1>{error}</h1></div>;
    return (
        <>
            <Header />
            <AllTable listItem={filterFerreteria} />
            <Footer />
        </>
    )
}

export default Ferreteria;