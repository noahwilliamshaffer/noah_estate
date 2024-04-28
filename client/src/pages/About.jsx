import React from 'react';

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-800">Noah Shaffer</h1>
        <p className="text-md text-slate-500">Sarasota, FL | 941-451-9208</p>
        <p className="text-md mb-6 text-slate-500">24-year-old graduate from Florida State University</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl text-slate-800 font-semibold">MANAGER, Coppola</h3>
            <p className="text-slate-600">July 2023 - Present, Venice Florida</p>
            <ul className="list-disc list-inside text-slate-600">
              <li>Supervise staff and associated workers.</li>
              <li>Account for inventory and coordinate with stockers.</li>
              <li>Work closely with the owner and keep him informed while out of the country.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-slate-800 font-semibold">IT SUPPORT INTERN, Chevron</h3>
            <p className="text-slate-600">MAY 2022 - AUGUST 2023, HOUSTON TX</p>
            <ul className="list-disc list-inside text-slate-600">
              <li>Assisted with the migration of data systems to Microsoft Azure's cloud platform.</li>
              <li>Enhanced helpdesk service efficiency.</li>
              <li>Updated inventory spreadsheets for IT asset management.</li>
            </ul>
          </div>

          {/* Other experiences can be added in similar div blocks */}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">Education</h2>
        <div>
          <h3 className="text-xl text-slate-800 font-semibold">Florida State University</h3>
          <p className="text-slate-600">March 2022 - May 2023, Tallahassee FL</p>
          <p className="text-slate-600">Master's degree at UCF</p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">Notable Projects</h2>
        <p className="text-slate-600">
          <a href="https://github.com/noahwilliamshaffer" className="text-blue-500 hover:text-blue-700">
            University GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
