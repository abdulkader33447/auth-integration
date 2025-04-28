import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
  const {user} = use(AuthContext)
  return (
    <div className='max-w-sm mx-auto my-20 space-y-2'>
      <h1>Your profile</h1>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <img className='rounded-md' src={user.photoURL} alt="" />
    </div>
  );
};

export default Profile;