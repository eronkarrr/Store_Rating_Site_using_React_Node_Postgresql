import React, { useEffect, useState } from 'react';
import { fetchStores } from '../services/storeService';

const StoresPage = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStores = async () => {
      try {
        const data = await fetchStores();
        setStores(data);
      } catch (error) {
        console.error('Failed to fetch stores', error);
      } finally {
        setLoading(false);
      }
    };
    getStores();
  }, []);

  if (loading) {
    return <div>Stores loading...</div>;
  }

  return (
    <div>
      <h1>Stores List</h1>
      {stores.length === 0 && <p>No stores found.</p>}
      <ul>
        {stores.map(store => (
          <li key={store.id}>
            <strong>{store.name}</strong> - {store.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoresPage;
