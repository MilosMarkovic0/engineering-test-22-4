// ParcDetails.tsx

import React from 'react';

interface Parc {
  id: string;
  name: string;
  description: string;
}

interface ParcDetailsProps {
  parc: Parc;
  onDelete: (id: string) => void;
}

const ParcDetails: React.FC<ParcDetailsProps> = ({ parc, onDelete }) => {
  const handleDelete = () => {
    onDelete(parc.id);
  };

  return (
    <div>
      <h2>Parc Details</h2>
      <p>Name: {parc.name}</p>
      <p>Description: {parc.description}</p>
      <button onClick={handleDelete}>Delete Parc</button>
    </div>
  );
};

export default ParcDetails;
