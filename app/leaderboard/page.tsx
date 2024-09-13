/**Purpose: Displays the leaderboard for the game, showing the top players and their respective scores, ranked by the number of coins or points earned.
Relevance: Encourages user engagement and competitiveness. Players can see where they stand compared to others and aim to improve their ranking. */

"use client";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const Leaderboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If no user is authenticated, redirect to login page
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);


  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Leaderboard</h2>
      <p>You: {user.email}</p>
      <div>
        <a href="/profile" className="underline">Profile</a>
      </div>
    </div>
  );
};

export default Leaderboard;
