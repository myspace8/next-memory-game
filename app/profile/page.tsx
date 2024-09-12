/**Purpose: Displays the user’s profile information such as name, email, phone number, and a summary of their progress (e.g., games played, coins earned, leaderboard position).
Relevance: Allows players to manage their account information and track their in-game progress. Users who haven’t signed in or created an account will be prompted to do so here. */

// /app/profile/page.js
// "use client";
// import { useAuth } from "../../context/AuthContext";
// import { useRouter } from "next/navigation";

// const Profile = () => {
//   const { user, signOut } = useAuth();
//   const router = useRouter();

//   if (!user) {
//     router.push("/login");
//     return null;
//   }

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Name: {user.displayName || "No name"}</p>
//       <p>Email: {user.email}</p>
//       <button onClick={signOut}>Sign Out</button>
//     </div>
//   );
// };

// export default Profile;


"use client";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const Profile = () => {
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
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
