import React, { useState } from 'react';

const DeleteAlcohol = ({ deleteAlcoholData }) => {
  const [id, setId] = useState('');

  const handleDelete = () => {
    deleteAlcoholData(id);
    setId(''); // Clear the input field after deletion
  };

  return (
    <div>
        <h2>Delete an Alcohol</h2>
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Alcohol</button>
    </div>
  );
};

export default DeleteAlcohol;
