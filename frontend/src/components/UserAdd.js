import React, { useState } from 'react';

function UserAdd({ onUserAdded }) {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    if (!name.trim()) return;
    try {
      const res = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error('Failed to add user');
      const data = await res.json();
      onUserAdded(data);
      setName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-4 flex flex-col sm:flex-row max-w-md mx-auto">
      <input
        type="text"
        size="35"
        placeholder="New user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-grow bg-green-100 text-green-900 border border-green-400 rounded-lg px-4 sm:px-0 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition mb-2 sm:mb-0"
      />
      <button
        onClick={handleAdd}
        className="sm:ml-2 sm:mb-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition duration-300"
      >
        Add User
      </button>
    </div>
  );
}

export default UserAdd;
