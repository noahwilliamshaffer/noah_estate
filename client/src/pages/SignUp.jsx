import React from 'react'

export default function SignUp() {
  return (
   
    <div className='p-3 max-w-lg'>
    <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
    <form className='flex flex-col gap-4'> 
      <input type="text" placeholder="Username" className="block border p-3 rounded-lg" id="username"  />
      <input type="email" placeholder="Email" className="block border p-3 rounded-lg" id="email"  />
      <input type="password" placeholder="Password" className="block border p-3 rounded-lg" id="password"  />
      <button type="submit" className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
    </form>
    </div>
    
  )
}
