import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using it for routing

export default function SignUp() {
  const [formData, setFormData] = useState({}); // Initialize form data state

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.id]: e.target.value,
    }); // Function to update form data on input change
   // console.log(formData); // Log the updated form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data); // Log the response from the server
  };
  console.log(formData); // Log the response from the server
  return (
    <div className='p-3 max-w-lg'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'> 
        <input type="text" placeholder="Username" className="block border p-3 rounded-lg" id="username" onChange={handleChange} />
        <input type="email" placeholder="Email" className="block border p-3 rounded-lg" id="email" onChange={handleChange} />
        <input type="password" placeholder="Password" className="block border p-3 rounded-lg" id="password" onChange={handleChange} />
        <button type="submit" className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
