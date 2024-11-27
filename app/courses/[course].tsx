import React from "react";
import { useRouter } from "next/router";
import CoursePage from "../components/CoursePage"; // Use relative imports if your setup differs

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

const Course = () => {
  const router = useRouter();
  const { course } = router.query; // Access the dynamic route parameter

  const courseDetails = courseContent[course as keyof typeof courseContent];

  if (!courseDetails) {
    return <p className="text-center text-gray-500">Course not found.</p>;
  }

  return (
    <CoursePage
      title={courseDetails.title}
      description={courseDetails.description}
      content={courseDetails.content}
    />
  );
};

export default Course;
