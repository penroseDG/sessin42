import React from 'react';

export default function Bai11() {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-200 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-gray-400 rounded-full h-10 w-10"></div>
            <span className="font-bold text-lg">Company</span>
          </div>
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-2 p-2 bg-purple-600 text-white rounded">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>Users</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-300 rounded">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <span>General</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-300 rounded">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4 4-4 4m8-8h.01M8 7h.01M8 11h.01M8 15h.01M16 15h.01M16 11h.01M16 7h.01" />
              </svg>
              <span>Statistic</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-300 rounded">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17v4M21 17v4M8 11v10M16 11v10M12 5v16" />
              </svg>
              <span>Billing</span>
            </a>
          </nav>
        </div>
        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-300 rounded mt-4">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H3" />
          </svg>
          <span>Sign out</span>
        </a>
      </div>
      <div className="flex-1 p-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold">12</h2>
              <p className="text-gray-500">Peoples</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">5</h2>
              <p className="text-gray-500">Departments</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">0</h2>
              <p className="text-gray-500">Guests</p>
            </div>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">Invite</button>
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600">
            <option>All</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600">
            <option>All Departments</option>
          </select>
        </div>
        <div className="overflow-x-auto bg-white rounded-md shadow-md">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Phone number</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Activity</th>
              </tr>
            </thead>
            <tbody>
              {Array(6).fill().map((_, index) => (
                <tr key={index} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                      <span>Andrew Bojangles</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">Active</td>
                  <td className="px-4 py-2">+7900001101</td>
                  <td className="px-4 py-2">Designer</td>
                  <td className="px-4 py-2">Pride 1</td>
                  <td className="px-4 py-2">2 days ago</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}