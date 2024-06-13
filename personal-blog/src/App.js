// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import logo from "./logo.png";
import image1 from "./blog-image.png";
import image2 from "./blog-image-2.png";

function App() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "#blogs-section" },
    { label: "Contact", href: "/" },
  ];

  const blogPosts = [
    {
      id: 1,
      image: image2,
      title: "Exploring the Future of AI",
      content:
        "Artificial Intelligence (AI) is rapidly evolving, with advancements in machine learning, natural language processing, and robotics. The future of AI promises to revolutionize industries and enhance our daily lives in unimaginable ways.",
      author: "Hammad U.",
      date: "Published on May 31, 2024",
      link: "/",
    },
    {
      id: 2,
      image: image1,
      title: "Sustainable Living: Tips and Tricks",
      content:
        "Sustainable living is all about reducing our environmental impact. From using reusable products to conserving energy, there are many simple and effective ways to live more sustainably and protect our planet.",
      author: "Hammad U.",
      date: "Published on May 30, 2024",
      link: "/",
    },
    {
      id: 3,
      image: image2,
      title: "The Rise of Remote Work",
      content:
        "Remote work has become increasingly popular, especially in the wake of the COVID-19 pandemic. It offers flexibility and work-life balance, but also presents challenges such as maintaining productivity and combating isolation.",
      author: "Hammad U.",
      date: "Published on May 29, 2024",
      link: "/",
    },
    {
      id: 4,
      image: image1,
      title: "Healthy Eating Habits",
      content:
        "Eating healthy is essential for maintaining overall well-being. Incorporating a variety of fruits, vegetables, and whole grains into your diet can help you stay energized and prevent chronic diseases.",
      author: "Hammad U.",
      date: "Published on May 29, 2024",
      link: "/",
    },
    {
      id: 5,
      image: image2,
      title: "Traveling on a Budget",
      content:
        "Traveling doesn't have to be expensive. With careful planning and smart choices, you can explore new destinations without breaking the bank. Learn how to save on flights, accommodations, and more.",
      author: "Hammad U.",
      date: "Published on May 29, 2024",
      link: "/",
    },
    {
      id: 6,
      image: image1,
      title: "The Importance of Mental Health",
      content:
        "Mental health is just as important as physical health. It's crucial to take time for self-care, seek support when needed, and practice mindfulness to maintain mental well-being.",
      author: "Hammad U.",
      date: "Published on May 29, 2024",
      link: "/",
    },
  ];

  return (
    <React.StrictMode>
      <>
        <Navbar logo={logo} links={navLinks} />
        <Blog posts={blogPosts} />
      </>
    </React.StrictMode>
  );
}

export default App;
