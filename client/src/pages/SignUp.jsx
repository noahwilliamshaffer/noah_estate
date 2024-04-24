import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../Components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState(null);  // State to handle profile image URL
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);  // Logging response to debug
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      // Assuming the profile image URL is part of the response data, adjust according to your actual response structure
      setProfileImageUrl(data.user.profileImageUrl);
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error("Signup error:", error);  // More detailed error logging
    }
  };

  useEffect(() => {
    // Log the profile image URL to check if it is set correctly
    console.log("Profile Image URL:", profileImageUrl);
  }, [profileImageUrl]);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth/>  // Make sure OAuth component is correctly integrated and handled
      </form>
      {profileImageUrl && <img src={profileImageUrl} alt="Profile" />}  // Conditionally render the image if URL is available
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/SignIn'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}