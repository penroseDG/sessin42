import React from 'react';

export default function Bai10() {
  return (
    <div className="max-w-md mx-auto p-8 space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <p className="text-gray-500 text-sm mt-1">Your password is between 4 and 12 characters</p>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Input Text Label</label>
        <input
          type="text"
          placeholder="Typing |"
          className="w-full px-4 py-2 border border-red-500 rounded-md focus:outline-none"
        />
        <div className="flex items-center mt-1 text-red-500">
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0 0H9m6 0v4m0 0h-2m0-4H9m6 0H9m6 0v4" />
          </svg>
          <p>Error message informing me of a problem</p>
        </div>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox text-blue-500 h-4 w-4" />
          <span className="ml-2">Remember me</span>
        </label>
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 mb-2">Radio selection 1</label>
        <label className="inline-flex items-center">
          <input type="radio" name="radio" className="form-radio text-blue-500" />
          <span className="ml-2">Radio selection 1</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="radio" className="form-radio text-purple-500" />
          <span className="ml-2">Radio selection 2</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="radio" className="form-radio text-blue-500" />
          <span className="ml-2">Radio selection 3</span>
        </label>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Dropdown Title</label>
        <select className="w-full px-4 py-2 border border-purple-500 rounded-md focus:outline-none">
          <option>Dropdown option</option>
          <option>Dropdown option 1</option>
          <option>Dropdown option 2</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-2 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-500 hover:text-white">
          Cancel
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
          Next
        </button>
      </div>
    </div>
  );
}