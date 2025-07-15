import React, { useState } from 'react';

function ClaimButton({ selectedUserId, onClaimed }) {
  const [loading, setLoading] = useState(false);
  const [claimedPoints, setClaimedPoints] = useState(null);

  const handleClaim = async () => {
    if (!selectedUserId) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/claims/${selectedUserId}`, {
        method: 'POST',
      });
      if (!res.ok) throw new Error('Failed to claim points');
      const data = await res.json();
      setClaimedPoints(data.pointsClaimed);
      onClaimed(data.user);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleClaim}
        disabled={loading || !selectedUserId}
        className={`px-8 py-2 rounded-lg text-white font-semibold tracking-wide shadow-lg transition-transform transform ${
          loading || !selectedUserId
            ? 'bg-red-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-rose-500 to-rose-700 hover:scale-105'
        }`}
      >
        {loading ? 'Claiming...' : 'Claim'}
      </button>
      {claimedPoints !== null && (
        <div className="mt-3 text-white font-extrabold text-2xl animate-pulse">
          Points claimed: {claimedPoints}
        </div>
      )}
    </div>
  );
}

export default ClaimButton;
