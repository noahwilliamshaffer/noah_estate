import { set } from 'mongoose';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom if you're using it for routing
import { useDispatch, useSelector } from 'react-redux';
import {
  SignInStart, 
  SignInSuccess, 
  SignInFailure
} from '../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({}); // Initialize form data state
  const {loading, error} = useSelector((state) => state.user); // Destructure loading and error state from user slice
  const navigate = useNavigate(); // Initialize navigate function from useNavigate hook
 const dispatch = useDispatch(); // Initialize dispatch function from useDispatch hook

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.id]: e.target.value,
    }); // Function to update form data on input change
   // console.log(formData); // Log the updated form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try{
   dispatch(SignInStart());
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }); // Send a POST request to the server with the form data
    const data = await res.json();

    if (data.success === false) {
      dispatch(SignInFailure(data.message)); //
      return;
    }
    dispatch(SignInSuccess(data));
    navigate('/');
  } catch (error) {
    setError(error.message);
    setLoading(false);
    }
  };
  console.log(formData); // Log the response from the server


  return (
    <div className='p-3 max-w-lg'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'> 
        <input type="email" placeholder="Email" className="block border p-3 rounded-lg" id="email" onChange={handleChange} />
        <input type="password" placeholder="Password" className="block border p-3 rounded-lg" id="password" onChange={handleChange} />
        <button disabled = {loading} type="submit" className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 
        disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
           </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to='/SignUp'>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-3">{error}</p>} 
    </div> // Display error message if there's an error from try catch block in handleSubmit function
  );
}
