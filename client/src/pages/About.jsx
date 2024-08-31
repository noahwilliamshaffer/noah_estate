import React from 'react';

export default function About() {
  const coaches = [
    {
      name: 'Coach John Doe',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      image: 'https://via.placeholder.com/200' // Replace with actual image URL
    },
    {
      name: 'Coach Mike Doe',
      phone: '098-765-4321',
      email: 'mike.doe@example.com',
      image: 'https://via.placeholder.com/200' // Replace with actual image URL
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

