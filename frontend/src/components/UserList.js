import React from 'react';

function UserList({ users, selectedUserId, onSelectUser }) {
  return (
    <select
      className="bg-green-100 text-green-900 border border-green-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
      value={selectedUserId || ''}
      onChange={(e) => onSelectUser(e.target.value)}
    >
      <option value="" disabled>Select a user</option>
      {users.map(user => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}

export default UserList;
