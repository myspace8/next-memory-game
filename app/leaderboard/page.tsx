/**Purpose: Displays the leaderboard for the game, showing the top players and their respective scores, ranked by the number of coins or points earned.
Relevance: Encourages user engagement and competitiveness. Players can see where they stand compared to others and aim to improve their ranking. */

"use client";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const Leaderboard = () => {

//   useEffect(() => {
//     // If no user is authenticated, redirect to login page
//     if (!user) {
//       router.push("/sign-in");
//     }
//   }, [user, router]);


  return (
    <div>
      <h2 className="text-green-600">Leaderboard</h2>
    </div>
  );
};

export default Leaderboard;
