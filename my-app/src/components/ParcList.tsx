import React, { useState, useEffect } from 'react';
import { fetchParcs, deleteParc } from '../services/api';

const ParcList: React.FC = () => {
  const [parcs, setParcs] = useState<any[]>([]);

  useEffect(() => {
    fetchParcs()
      .then((data) => setParcs(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteParc = async (parcId: string) => {
    try {
      await deleteParc(parcId);
      setParcs(parcs.filter((parc) => parc.id !== parcId));
    } catch (error) {
      console.error(error);
      // Display error message to the user
    }
  };

  return (
    <div>
      <h2>Parcs List</h2>
      <ul>
        {parcs.map((parc) => (
          <li key={parc.id}>
            {parc.name}
            <button onClick={() => handleDeleteParc(parc.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParcList;
