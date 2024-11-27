import React from "react";
import Link from "next/link";

const courseContent = {
  html: {
    title: "HTML for Beginners",
    description: "Learn the basics of HTML, the foundation of web development.",
  },
  css: {
    title: "CSS Essentials",
    description: "Master CSS to style your web pages beautifully.",
  },
  javascript: {
    title: "JavaScript Basics",
    description: "Understand JavaScript to make interactive websites.",
  },
  react: {
    title: "React Fundamentals",
    description: "Build dynamic web applications with React.",
  },
  "ml-intro": {
    title: "Machine Learning Introduction",
    description: "Explore the basics of Machine Learning and AI.",
  },
  "deep-learning": {
    title: "Deep Learning with Python",
    description: "Dive into neural networks and deep learning with Python.",
  },
};

const Courses: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <ul className="space-y-4">
        {Object.entries(courseContent).map(([key, { title, description }]) => (
          <li key={key} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <Link href={`/courses/${key}`}>
              <a className="text-blue-500 hover:underline">Learn more</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
