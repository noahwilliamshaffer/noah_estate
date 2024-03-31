import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center'/>
        <input type="text" placeholder='Username' id='username' name='username' className='border p-3' />
        <input type="text" placeholder='Email' id='email' name='email' className='border p-3' />
        <input type="password" placeholder='Password' id='password' name='password' className='border p-3' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' type='submit'>Update</button>
      </form>  
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>  
    </div>
  );
}
