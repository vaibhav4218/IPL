import React from "react";
import Link from "next/link";

const CoursesPage = () => {
  const courses = [
    {
      id: "html",
      title: "HTML for Beginners",
      description: "Learn the basics of HTML, the foundation of web development.",
    },
    {
      id: "css",
      title: "CSS Essentials",
      description: "Master CSS to style your web pages beautifully.",
    },
    {
      id: "javascript",
      title: "JavaScript Basics",
      description: "Understand JavaScript to make interactive websites.",
    },
    {
      id: "react",
      title: "React Fundamentals",
      description: "Build dynamic web applications with React.",
    },
    {
      id: "ml-intro",
      title: "Machine Learning Introduction",
      description: "Explore the basics of Machine Learning and AI.",
    },
    {
      id: "deep-learning",
      title: "Deep Learning with Python",
      description: "Dive into neural networks and deep learning with Python.",
    },
  ];

  return (
    <div className="flex bg-gray-900 justify-center p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20 pb-20 min-w-28">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-2 text-yellow-500">{course.title}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-300 mb-4 sm:mb-0 sm:mr-4">{course.description}</p>
              <Link href={`/courses/${course.id}`}>
                <span className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg sm:ml-auto">
                  Start Learning
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
