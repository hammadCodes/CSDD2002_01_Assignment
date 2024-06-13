// src/components/Blog.js
import React from "react";
import PropTypes from "prop-types";

const Blog = ({ posts }) => {
  return (
    <section id="blogs-section">
      <div className="hc-container-outer">
        <h2 className="hc-container-outer__title">Learn more about Laifen.</h2>
        <div className="hc-container">
          {posts.map((post) => (
            <div key={post.id} className="hc-blog-post">
              <a href={post.link} className="hc-blog-post-link">
                <img src={post.image} alt={post.title} className="hc-image" />
              </a>
              <p className="hc-date-author">Published on {post.date}</p>
              <h2 className="hc-title">{post.title}</h2>
              <p className="hc-author">Authored by {post.author}</p>
              <p className="hc-body">{post.content}</p>
              <a href={post.link} className="text-button read-more">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Blog;
