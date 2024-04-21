import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>Noah Shaffer</h1>
      <p className='mb-4 text-slate-700'>
        For now this is simply an example website built in react.js, I am well versed in python flask and next.js full stack applications as well.
      </p>
      <p className='mb-4 text-slate-700'>
        You can message me for website inquiries, and a free call to describe your design. 
        My phone is <a href="tel:+19414519208" className="text-blue-500 hover:text-blue-700">941-451-9208</a> and my email is 
        <a href="mailto: noahwilliamshaffer@gmail.com" className="text-blue-500 hover:text-blue-700"> noahwilliamshaffer@gmail.com</a>.
      </p>
      <p className='mb-4 text-slate-700'>
        The code for this project amongst several other projects is available on my GitHub at 
        <a href="https://github.com/noahwilliamshaffer " className="text-blue-500 hover:text-blue-700"> https://github.com/noahwilliamshaffer</a>.
      </p>

    </div>
  );
}