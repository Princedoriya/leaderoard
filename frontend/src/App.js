import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserAdd from "./components/UserAdd";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
      if (!selectedUserId && data.length > 0) {
        setSelectedUserId(data[0]._id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  const handleUserAdded = (newUser) => {
    setUsers((prev) =>
      [...prev, newUser].sort((a, b) => b.totalPoints - a.totalPoints)
    );
    setSelectedUserId(newUser._id);
  };

  const handleClaimed = (updatedUser) => {
    setUsers((prev) => {
      const updated = prev.map((u) =>
        u._id === updatedUser._id ? updatedUser : u
      );
      return updated.sort((a, b) => b.totalPoints - a.totalPoints);
    });
  };

  return (
    <div className="max-w-4xl flex-row-3 justify-center mx-auto p-4 sm:p-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 min-h-[24rem] text-white font-['Orbitron',_sans-serif]">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center tracking-widest drop-shadow-lg">
        Leaderboard task
      </h1>
      <div className="flex flex-col mx-4 sm:mx-16 md:flex-row md:space-x-6">
        <div className="flex flex-col space-y-4 md:w-1/3">
          <UserAdd onUserAdded={handleUserAdded} />
          <UserList
            users={users}
            selectedUserId={selectedUserId}
            onSelectUser={setSelectedUserId}
          />

          <ClaimButton selectedUserId={selectedUserId} onClaimed={handleClaimed} />
        </div>
      </div>

      <div className="mx-4 sm:mx-32 md:w-2/3 h-full mt-6 md:mt-0">
        <Leaderboard users={users} />
      </div>
    </div>
  );
};

export default App;
