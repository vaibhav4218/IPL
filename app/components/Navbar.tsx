import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-darkBlue text-offWhite p-4 flex justify-between items-center">
    {/* Logo Section */}
    <div className="flex items-center space-x-3">
      <img
        src="C:/Users/vasih/nxtjs/app/images/logo.png" // Path to your logo image
        alt="Logo"
        className="w-12 h-12 object-contain rounded-full"
      />
      <h1 className="text-2xl font-bold">Star Dashboard</h1>
    </div>

    {/* Navigation Links */}
    <ul className="flex space-x-6">
      <li className="cursor-pointer hover:text-beige">Home</li>
      <li className="cursor-pointer hover:text-beige">Projects</li>
      <li className="cursor-pointer hover:text-beige">Leaderboard</li>
      <li className="cursor-pointer hover:text-beige">Profile</li>
    </ul>
  </nav>
  )
}

export default Navbar