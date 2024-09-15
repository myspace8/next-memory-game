/* Profile Form for Updating User Profile */
"use client"

import React, { useState } from 'react';
import { useUser } from '../context/userContext';

const ProfileForm = () => {
  const { userProfile, updateUserProfile } = useUser();
  const [displayName, setDisplayName] = useState(userProfile?.displayName || '');
  const [avatar, setAvatar] = useState(userProfile?.avatar || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserProfile({ displayName, avatar });
    alert('Profile updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Display Name:
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label>
        Avatar URL:
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
