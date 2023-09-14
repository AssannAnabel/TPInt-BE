import { createContext, useState, useEffect, useCallback } from "react";
import { getAllInvtry, URL_invtry, itemsInvtry, getInvtryByItem } from '../services/inventoryServices'
import { initialInventory } from '../services/initialInventory'

export const InvtryCtx = createContext([initialInventory]);

export const InvtryCtxProvider = ({ children }) => {
  const [invtry, setInvtry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //para filtrar por item 
  const [filterFerreteria, setFilterFerreteria] = useState([]);
  const [filterTranquera, setFilterTranquera] = useState([]);
  const [filterRopaTrabajo, setFilterRopaTrabajo] = useState([]);

  //useCallback: the same function instance is used across renders, optimizing performance by avoiding unnecessary re-creations of the function. This is the key concept behind memoization.
  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      //guardo todo el inventario en data
      const data = await getAllInvtry(URL_invtry);
      setInvtry(data);
      //voy guardando por item
      const ferreteria = await getInvtryByItem(itemsInvtry[2]);
      setFilterFerreteria(ferreteria);
      const tranquera = await getInvtryByItem(itemsInvtry[0]);
      setFilterTranquera(tranquera);
      const ropaTrabajo = await getInvtryByItem(itemsInvtry[1]);
      setFilterRopaTrabajo(ropaTrabajo);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InvtryCtx.Provider value={{ invtry, filterFerreteria, filterTranquera, filterRopaTrabajo ,error, isLoading, setInvtry, fetchData }}>
      {children}
    </InvtryCtx.Provider>
  );
};