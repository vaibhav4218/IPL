"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation"; // Use this hook for accessing params

const courses = {
  courseContent: {
    title: "HTML for Beginners",
    topics: [
      { id: 1, title: "Introduction to HTML", content: "HTML stands for HyperText Markup Language..." },
      { id: 2, title: "HTML Elements", content: "HTML elements are the building blocks of HTML..." },
      { id: 3, title: "HTML Attributes", content: "Attributes provide additional information about HTML elements..." },
    ],
  },
  css: {
    title: "CSS Essentials",
    topics: [
      { id: 1, title: "Introduction to CSS", content: "CSS stands for Cascading Style Sheets..." },
      { id: 2, title: "Selectors", content: "CSS selectors are used to select and style HTML elements..." },
      { id: 3, title: "Box Model", content: "The CSS box model describes the rectangular boxes generated for elements..." },
    ],
  },
  javascript: {
    title: "JavaScript Basics",
    topics: [
      { id: 1, title: "Introduction to JavaScript", content: "JavaScript is a high-level programming language..." },
      { id: 2, title: "Variables and Data Types", content: "Variables are used to store data values..." },
      { id: 3, title: "Functions", content: "Functions are blocks of code that can be called and executed..." },
    ],
  },
  react: {
    title: "React Fundamentals",
    topics: [
      { id: 1, title: "Introduction to React", content: "React is a JavaScript library for building user interfaces..." },
      { id: 2, title: "Components", content: "Components are the building blocks of a React application..." },
      { id: 3, title: "State and Props", content: "State and props are used to manage data and pass data between components..." },
    ],
  },
  "ml-intro": {
    title: "Machine Learning Introduction",
    topics: [
      { id: 1, title: "What is Machine Learning?", content: "Machine Learning is a subset of artificial intelligence..." },
      { id: 2, title: "Types of Machine Learning", content: "There are three main types of machine learning: supervised, unsupervised, and reinforcement learning..." },
      { id: 3, title: "Applications of Machine Learning", content: "Machine Learning is used in various fields such as healthcare, finance, and marketing..." },
    ],
  },
  "deep-learning": {
    title: "Deep Learning with Python",
    topics: [
      { id: 1, title: "Introduction to Deep Learning", content: "Deep Learning is a subset of machine learning that uses neural networks..." },
      { id: 2, title: "Neural Networks", content: "Neural networks are a set of algorithms modeled after the human brain..." },
      { id: 3, title: "Deep Learning Libraries", content: "There are several deep learning libraries available in Python such as TensorFlow and PyTorch..." },
    ],
  },
  // Add more courses here...
};

const CourseContentPage = () => {
  const params = useParams(); // Access params
  const courseId = params?.courseId; // Get the courseId from params

  const course = courses[courseId as keyof typeof courses];

  if (!course) return notFound();

  const [selectedTopic, setSelectedTopic] = useState(course.topics[0]);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-300">
      {/* Sidebar with topics */}
      <div className="w-1/4 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-xl font-bold text-yellow-500 mb-4">{course.title}</h2>
        <ul>
          {course.topics.map((topic) => (
            <li
              key={topic.id}
              className={`p-2 cursor-pointer hover:bg-gray-700 rounded ${
                selectedTopic.id === topic.id ? "bg-gray-700 text-yellow-500" : ""
              }`}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Content area */}
      <div className="w-3/4 p-8">
        <h3 className="text-2xl font-bold mb-4">{selectedTopic.title}</h3>
        <p>{selectedTopic.content}</p>
      </div>
    </div>
  );
};

export default CourseContentPage;
