"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";

const courseContent = {
  html: {
    title: "HTML for Beginners",
    topics: [
      {
        id: "intro",
        name: "Introduction to HTML",
        content:
          "HTML stands for HyperText Markup Language. It is the foundation of web development.",
      },
      {
        id: "tags",
        name: "Common Tags",
        content:
          "HTML uses tags like <div>, <p>, <a>, <img> to structure content on web pages.",
      },
      {
        id: "forms",
        name: "Forms and Inputs",
        content: "Forms allow users to input data into web pages.",
      },
    ],
  },
  css: {
    title: "CSS Essentials",
    topics: [
      {
        id: "intro",
        name: "Introduction to CSS",
        content:
          "CSS stands for Cascading Style Sheets. It is used to style HTML elements.",
      },
      {
        id: "selectors",
        name: "CSS Selectors",
        content: "Selectors allow you to target specific elements for styling.",
      },
      {
        id: "layout",
        name: "CSS Layouts",
        content:
          "CSS provides tools like Flexbox and Grid for creating layouts.",
      },
    ],
  },
  javascript: {
    title: "JavaScript Basics",
    topics: [
      {
        id: "intro",
        name: "Introduction to JavaScript",
        content:
          "JavaScript is a programming language used to make web pages interactive.",
      },
      {
        id: "variables",
        name: "Variables and Data Types",
        content: "Variables store data that can be used in your code.",
      },
      {
        id: "functions",
        name: "Functions and Events",
        content:
          "Functions are blocks of code that perform specific tasks.",
      },
    ],
  },
  react: {
    title: "React Fundamentals",
    topics: [
      {
        id: "intro",
        name: "Introduction to React",
        content:
          "React is a JavaScript library for building user interfaces.",
      },
      {
        id: "components",
        name: "Components and Props",
        content:
          "Components are the building blocks of React applications.",
      },
      {
        id: "state",
        name: "State and Lifecycle",
        content:
          "State allows components to manage and update their data.",
      },
    ],
  },
};

const CoursePage = ({ params }: { params: { course: string } }) => {
  const { course } = params;

  const courseDetails = courseContent[course as keyof typeof courseContent];
  const [selectedTopic, setSelectedTopic] = useState(
    courseDetails?.topics[0] || null
  );

  if (!courseDetails) return <p>Course not found.</p>;

  return (
    <div className="min-h-screen flex">
      {/* Left: Topics */}
      <aside className="w-1/3 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">{courseDetails.title}</h2>
        <ul className="space-y-3">
          {courseDetails.topics.map((topic) => (
            <li
              key={topic.id}
              className={`cursor-pointer p-2 rounded-lg ${
                selectedTopic?.id === topic.id
                  ? "bg-yellow-500 text-black"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Right: Content */}
      <main className="flex-grow bg-gray-900 text-white p-6">
        {selectedTopic ? (
          <>
            <h3 className="text-3xl font-bold mb-4">{selectedTopic.name}</h3>
            <p className="text-gray-300">{selectedTopic.content}</p>
          </>
        ) : (
          <p>Select a topic to view its content.</p>
        )}
      </main>
    </div>
  );
};

export default CoursePage;
