import React from 'react';

const AppDescription = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-6">MERN Real Estate Marketplace App</h1>

      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <p className="text-md text-gray-700 mb-4">
       This app is one of many fullstack applications I've built, the difference here being I ensured that the organization of files and the commit log were industry standard for neat presentation. Built using MongoDB, Express.js, React, and Node.js, this application facilitates seamless interactions between property sellers, buyers, and real estate agents. By leveraging a comprehensive suite of tools and technologies, the platform ensures a user-friendly experience while maintaining high security and efficiency standards.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Advanced Authentication System with JWT, Firebase, and Google OAuth.</li>
        <li>Comprehensive Property Management for creating, viewing, editing, and deleting property listings.</li>
        <li>Dynamic Search and Filtering capabilities.</li>
        <li>Image Upload Capability for managing property images.</li>
        <li>Responsive Design that ensures a great experience across all devices.</li>
        <li>Easy Deployment and Scalability on the 'render' platform.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
      <p className="text-md text-gray-700 mb-4">
        The backend is powered by Node.js and Express.js, creating a robust server-side framework that handles requests efficiently. MongoDB serves as the data store, providing high performance and ease of scale, while the frontend is developed using React, offering a reactive user interface that is both fast and responsive. State management is handled by Redux Toolkit, which simplifies state logic and provides tools for effectively writing robust and scalable application logic.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Deployment and Real-World Application</h2>
      <p className="text-md text-gray-700 mb-4">
       
I deployed a MERN stack application on Amazon AWS using MongoDB on EC2 to manage our application's data. The deployment process began by setting up EC2 instances, where I configured the necessary environment, including installing Node.js for the backend and serving the React.js frontend. For the database, I installed MongoDB directly on a separate EC2 instance to ensure efficient data management and scalability. This setup allowed for a controlled and customizable environment, providing the robustness needed for real-world application demands. The entire application was managed through AWS, leveraging EC2's flexibility to handle our web and database servers effectively.
      </p>

    </div>
  );
};

export default AppDescription;
