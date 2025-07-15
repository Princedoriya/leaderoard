import React from "react";
import { Star, Crown, User, CoinsIcon } from "lucide-react";

function Leaderboard({ users }) {
  const topThree = users.slice(0, 3);
  const rest = users.slice(3);

  const borderColors = ["#FBBF24", "#3B82F6", "#10B981"]; // yellow, blue, green
  const bgColors = ["#D9F99D", "#BFDBFE", "#A7F3D0"]; // lighter backgrounds
  const textColors = ["#B45309", "#1E40AF", "#047857"]; // darker text
  const rankCircleColors = ["#FBBF24", "#3B82F6", "#10B981"];

  return (
    <div className="max-w-lg mx-auto mt-10 bg-green-100 rounded-3xl shadow-lg p-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold font-serif mb-16 text-center text-green-900 tracking-wide drop-shadow-md">
        Leaderboard
      </h2>

      {/* Top 3 users */}
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-6 sm:space-y-0 mb-6">
        {topThree.map((user, index) => (
          <div
            key={user._id}
            className="relative flex flex-col items-center rounded-3xl px-6 pt-10 pb-4 w-full sm:w-28"
            style={{ backgroundColor: bgColors[index] }}
          >
            {/* Rank circle */}
            <div
              className="absolute -top-5 flex items-center justify-center rounded-full text-white font-bold"
              style={{
                backgroundColor: rankCircleColors[index],
                width: 34,
                height: 34,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {index + 1}
            </div>

            {/* Crown icon only for 1st place */}
            {index === 0 && (
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-yellow-500">
                <img src="./crown.png" className="max-w-24"></img>
              </div>
            )}

            {/* Avatar */}
            <div
              className="w-20 h-20 rounded-full border-4 overflow-hidden mb-2"
              style={{ borderColor: borderColors[index] }}
            >
              <img
                src={user.avatar || `https://i.pravatar.cc/150?u=${user._id}`}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <div className="font-bold text-lg sm:text-xl font-serif" style={{ color: textColors[index] }}>
              {user.name}
            </div>

            {/* Points */}
            <div
              className="text-lg sm:text-xl font-serif font-bold mt-1"
              style={{ color: textColors[index] }}
            >
              {user.totalPoints}
            </div>
          </div>
        ))}
      </div>

      {/* User list */}
      <div className="bg-white font-serif rounded-xl shadow p-4 max-h-64 sm:max-h-96 overflow-y-scroll scrollbar-hide">
        {/* Heading row */}
        <div className="sticky top-0 bg-white flex flex-row items-center justify-between border-b border-gray-400 pt-2 pb-2 mb-0 z-10">
          <div className="flex items-center text-green-900 font-bold text-lg tracking-wide w-24 justify-center space-x-2">
            <span className="w-6 sm:pl-4 pl-12 text-center font-bold flex justify-center ml-8 mr-10">Rank</span>
            <User className="w-6 h-5" />
            <span>Users</span>
          </div>
          <div className="flex items-center text-yellow-500 font-bold text-lg tracking-wide w-24 justify-center space-x-2">
            <CoinsIcon className="w-6 h-5" />
            <span>Points</span>
          </div>
        </div>
        {rest.map((user, index) => (
          <div
            key={user._id}
            className="flex flex-row items-center justify-between py-2 px-4 border rounded-lg last:border-b-0"
          >
            <div className="flex text-lg items-center space-x-3 relative w-48 justify-start">
              <div className="relative flex items-center">
                <Star className="text-yellow-500" size={24} />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900 select-none">
                  {index + 4}
                </span>
              </div>
              <img
                src={user.avatar || `https://i.pravatar.cc/40?u=${user._id}`}
                alt={user.name}
                className="hidden sm:block w-10 h-10 rounded-full object-cover "
              />
              <div className="text-green-900 font-semibold max-w-xs truncate">
                {user.name}
              </div>
            </div>
            <div className="text-green-700 font-bold w-24 text-center">{user.totalPoints}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
