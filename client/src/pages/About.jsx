import React from 'react';

export default function About() {
  const coaches = [
    {
      name: 'Alex Haizel',
      phone: '708-912-7656',
      email: 'Astm51@sbcglobal.net',
      image: '/images/oldstroke.jpg' // Correct path to the image
    },
    {
      name: 'Tyler Hazel',
      phone: '708-986-2254',
      email: 'Thaze22@sbcglobal.net',
      image: '/images/headband.jpg' // Correct path to the image
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Meet Our Tennis Coaches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coaches.map((coach, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg flex flex-col items-center">
            <img
              src={coach.image}
              alt={coach.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{coach.name}</h2>
            <p className="text-lg mb-1">Phone: {coach.phone}</p>
            <p className="text-lg mb-4">Email: <a href={`mailto:${coach.email}`} className="text-blue-500 hover:underline">{coach.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

