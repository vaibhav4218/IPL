import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-darkBlue text-offWhite p-4 flex justify-between items-center">
    {/* Logo Section */}
    <div className="flex items-center space-x-3">
      <Image
        src="/logo.png" 
        alt="Logo"
        width={50}
        height={50}
      />
      <h1 className="text-2xl font-bold">Star Dashboard</h1>
    </div>

    {/* Navigation Links */}
    <ul className="flex space-x-6">
      <li className="cursor-pointer hover:text-beige">Home</li>
      <li className="cursor-pointer hover:text-beige">Projects</li>
      <li className="cursor-pointer hover:text-beige">Leaderboard</li>
      <Link href={"/CoursesPage"}><li className="cursor-pointer hover:text-beige">Profile</li></Link>
     
    </ul>
  </nav>
    </div>
  )
}

export default Navbar