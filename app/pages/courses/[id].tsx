import React from "react";
import { useRouter } from "next/router";

const courseContent = {
  html: {
    title: "HTML for Beginners",
    description: "Learn the basics of HTML, the foundation of web development.",
    content: "HTML is the backbone of web pages and structures the content.",
  },
  css: {
    title: "CSS Essentials",
    description: "Master CSS to style your web pages beautifully.",
    content: "CSS controls the look and feel of your web pages.",
  },
  javascript: {
    title: "JavaScript Basics",
    description: "Understand JavaScript to make interactive websites.",
    content: "JavaScript brings interactivity to web pages.",
  },
  react: {
    title: "React Fundamentals",
    description: "Build dynamic web applications with React.",
    content: "React helps create modular and reusable UI components.",
  },
  "ml-intro": {
    title: "Machine Learning Introduction",
    description: "Explore the basics of Machine Learning and AI.",
    content: "Machine learning is a branch of AI focusing on data-driven learning.",
  },
  "deep-learning": {
    title: "Deep Learning with Python",
    description: "Dive into neural networks and deep learning with Python.",
    content: "Deep learning is a subset of ML using neural networks.",
  },
};

const CoursePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic route parameter

  const courseDetails = courseContent[id as keyof typeof courseContent];

  if (!courseDetails) {
    return <p className="text-center text-gray-500">Course not found.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{courseDetails.title}</h1>
      <p className="text-gray-600 mb-4">{courseDetails.description}</p>
      <div className="bg-gray-100 p-4 rounded-md shadow-sm">
        <p>{courseDetails.content}</p>
      </div>
    </div>
  );
};

export default CoursePage;
