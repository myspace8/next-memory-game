/* This component will display the user's profile data. */
import React from 'react';
import { useUser } from '../context/userContext';

const ProfileCard = () => {
  const { userProfile, loading } = useUser();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{userProfile?.displayName || 'No Name'}</h1>
      <img src={userProfile?.avatar || '/default-avatar.png'} alt="Avatar" width="100" />
      <p>Email: {userProfile?.email}</p>
      <p>High Score: {userProfile?.highScore}</p>
    </div>
  );
};

export default ProfileCard;
