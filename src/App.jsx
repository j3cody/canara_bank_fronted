import React, { useState } from 'react';

function App() {
  const [captchaType, setCaptchaType] = useState('image');
  const [language, setLanguage] = useState('English');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-sky-400">
      <div className="bg-white/10 backdrop-blur rounded-2xl shadow-xl p-6 w-full max-w-sm">
        <h2 className="text-center text-lg text-white font-medium mb-1">Welcome To</h2>
        <h1 className="text-center text-3xl font-bold text-yellow-400 mb-6">Net Banking</h1>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="User ID"
            className="w-full px-4 py-2 rounded bg-white/80 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-white/80 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex items-center space-x-4">
            <label className="flex items-center text-white text-sm">
              <input
                type="radio"
                checked={captchaType === 'image'}
                onChange={() => setCaptchaType('image')}
                className="mr-1"
              />
              Image Captcha
            </label>
            <label className="flex items-center text-white text-sm">
              <input
                type="radio"
                checked={captchaType === 'audio'}
                onChange={() => setCaptchaType('audio')}
                className="mr-1"
              />
              Audio Captcha
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Captcha"
              className="flex-1 px-3 py-2 rounded bg-white/80 placeholder-gray-400 focus:outline-none"
            />
            <div className="flex items-center">
              <img
                src="https://dummyimage.com/80x32/fff/000&text=RSFMT"
                alt="captcha"
                className="border rounded"
              />
              <button
                type="button"
                className="ml-2 text-blue-500 hover:text-blue-700"
                title="Refresh Captcha"
              >
                &#x21bb;
              </button>
            </div>
          </div>

          <div>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="w-full px-3 py-2 rounded bg-white/80 focus:outline-none"
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="flex items-center justify-end">
            <span className="text-xs text-blue-200 cursor-pointer hover:underline flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="12" rx="2" className="stroke-blue-200" />
                <path d="M7 10h2v4H7zM11 10h2v4h-2zM15 10h2v4h-2z" className="stroke-blue-200" />
              </svg>
              Use virtual keyboard
            </span>
          </div>

          <div className="flex space-x-2">
            <button
              type="submit"
              className="flex-1 bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500"
            >
              LOGIN
            </button>
            <button
              type="button"
              className="flex-1 bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500"
            >
              Create/Reset Login Password
            </button>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-200 text-blue-800 font-bold py-2 rounded hover:bg-blue-300">
              Unlock User ID
            </button>
            <button className="flex-1 bg-blue-200 text-blue-800 font-bold py-2 rounded hover:bg-blue-300">
              Activate User ID
            </button>
            <button className="flex-1 bg-blue-200 text-blue-800 font-bold py-2 rounded hover:bg-blue-300">
              Forgot User ID
            </button>
          </div>

          <button className="w-full bg-sky-400 text-white font-bold py-2 rounded hover:bg-sky-500 mt-2">
            New User Registration
          </button>

          <div className="flex space-x-2 mt-2">
            <button className="flex-1 bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500">
              PFMS Login
            </button>
            <button className="flex-1 bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500">
              TIN2.0 Bulk Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
