import React from "react";

interface Course {
  title: string;
  description: string;
  link: string;
}

const CoursesPage: React.FC = () => {
  const courses: Course[] = [
    {
      title: "HTML for Beginners",
      description: "Learn the basics of HTML, the foundation of web development.",
      link: "/courses/html",
    },
    {
      title: "CSS Essentials",
      description: "Master CSS to style your web pages beautifully.",
      link: "/courses/css",
    },
    {
      title: "JavaScript Basics",
      description: "Understand JavaScript to make interactive websites.",
      link: "/courses/javascript",
    },
    {
      title: "React Fundamentals",
      description: "Build dynamic web applications with React.",
      link: "/courses/react",
    },
    {
      title: "Machine Learning Introduction",
      description: "Explore the basics of Machine Learning and AI.",
      link: "/courses/ml-intro",
    },
    {
      title: "Deep Learning with Python",
      description: "Dive into neural networks and deep learning with Python.",
      link: "/courses/deep-learning",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800">
        <div className="flex items-center">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="w-12 h-12"
          />
          <h1 className="ml-3 text-2xl font-bold">YourBrand Courses</h1>
        </div>
        <nav className="space-x-6">
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="/about" className="hover:text-yellow-500">About</a>
          <a href="/contact" className="hover:text-yellow-500">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-6 text-center">
          Explore Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-2 text-yellow-500">{course.title}</h3>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <a
                href={course.link}
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg"
              >
                Start Learning
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center text-gray-500 py-4">
        <p>© 2024 YourBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CoursesPage;
