import { createContext, useState, useEffect, useCallback } from "react";
import { getAllInvtry, URL_invtry } from '../services/inventoryServices'
import { initialInventory } from '../services/initialInventory'

export const InvtryCtx = createContext([initialInventory]);

console.log(getAllInvtry(URL_invtry));

export const InvtryCtxProvider = ({ children }) => {
  const [invtry, setInvtry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //useCallback: the same function instance is used across renders, optimizing performance by avoiding unnecessary re-creations of the function. This is the key concept behind memoization.
  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllInvtry(URL_invtry);
      console.log('parsed', data);
      setInvtry(data);
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
    <InvtryCtx.Provider value={{ invtry, error, isLoading, setInvtry, fetchData }}>
      {children}
    </InvtryCtx.Provider>
  );
};
