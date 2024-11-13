import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-4 px-10 shadow-lg">
      <div className="flex items-center">
        <div className="logo text-2xl font-extrabold tracking-wide">
          MyTask
        </div>
      </div>
      <ul className="flex gap-10">
        {['Home', 'Your Tasks', 'Profile', 'Settings'].map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:underline underline-offset-4 hover:font-semibold transition-transform transform hover:scale-105"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
