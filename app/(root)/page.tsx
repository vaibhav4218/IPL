import Image from "next/image";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>

<div className="min-h-screen bg-gray-900 text-white flex flex-col">
  {/* Header */}
  <header className="flex justify-between items-center p-6">
    <div className="flex items-center">
      <img
        src="/logo.png" // Replace with your logo path
        alt="Your Logo"
        className="w-12 h-12"
      />
      <h1 className="ml-3 text-2xl font-bold">YourBrand</h1>
    </div>
    <div className="space-x-4">
      <button className="text-gray-300 hover:text-white">Login</button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-lg">
        Sign Up
      </button>
    </div>
  </header>

  {/* Hero Section */}
  <main className="flex-grow flex items-center justify-center text-center px-6">
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Unlock Your Potential with <span className="text-yellow-500">YourBrand</span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl mb-8">
        Explore challenges, enhance your skills, and grow your career with us.
      </p>
      <div className="space-x-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-lg">
          Get Started
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  </main>

  {/* Footer */}
  <footer className="text-center text-gray-500 py-6">
    <p>© 2024 YourBrand. All rights reserved.</p>
  </footer>
</div>


   </>
  );
}
