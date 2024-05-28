import React from 'react';

export default function Bai9() {
  return (
    <div className="bg-black text-white h-screen w-64 p-4 flex flex-col justify-between">
      <div>
        <nav className="space-y-2">
          <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6M9 21V11h6m-6 10h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2v6z" />
            </svg>
            <span className="ml-3">Dashboard</span>
          </a>
          <a href="#" className="flex items-center p-2 text-white bg-blue-800 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2zm0 0v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m4 4h6" />
            </svg>
            <span className="ml-3">Posts</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10M21 7v10M9 5l7 7-7 7" />
            </svg>
            <span className="ml-3">Media</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-5-9-5-9 5 9 5z" />
            </svg>
            <span className="ml-3">Pages</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded relative">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m-4 4h10m-7 4H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-5" />
            </svg>
            <span className="ml-3">Comments</span>
            <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center absolute top-0 right-0">1</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6H20M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span className="ml-3">Appearance</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-3">Plugins</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-3">Users</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0 0H9m6 0v4m0 0h-2m0-4H9m6 0H9m6 0v4" />
            </svg>
            <span className="ml-3">Settings</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m-4 4h10m-7 4H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-5" />
            </svg>
            <span className="ml-3">Tools</span>
          </a>
        </nav>
      </div>
      <div>
        <div className="flex items-center justify-between p-2 text-gray-400">
          <span>Light Mode</span>
          <button className="bg-gray-600 text-white p-1 rounded-full">
            ON
          </button>
        </div>
        <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-blue-800 rounded mt-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.5 15.5L11 21l5.5-5.5M11 3v18" />
          </svg>
          <span className="ml-3">Logout</span>
        </a>
      </div>
    </div>
  );
}