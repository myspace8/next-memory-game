/**Purpose: Displays the user’s profile information such as name, email, phone number, and a summary of their progress (e.g., games played, coins earned, leaderboard position).
Relevance: Allows players to manage their account information and track their in-game progress. Users who haven’t signed in or created an account will be prompted to do so here. */

"use client";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import ProfileCard from '../../components/profileCard';
import ProfileForm from '../../components/profileForm';

const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If no user is authenticated, redirect to login page
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  console.log(user);


  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <ProfileCard />
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
