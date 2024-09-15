/**Purpose: The game homepage, or level selector, where users can choose different grid sizes or difficulty levels to start the game. Each level may offer different challenges (e.g., 4x4 grid, 5x4 grid).
Relevance: This page serves as the entry point for the actual gameplay. It helps users select the game configuration based on their experience or preference. */

"use client";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const Gameplay = () => {
    const { user, signOut } = useAuth();
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
      <h2>Gameplay</h2>
      <p>You: {user.email}</p>
      <p className="text-sm">The game homepage, or level selector, where users can choose different grid sizes or difficulty levels to start the game. Each level may offer different challenges (e.g., 4x4 grid, 5x4 grid)</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Gameplay;