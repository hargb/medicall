import React from "react";
import { useNavigate } from "react-router-dom";

const Ayurveda = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "5 Ayurvedic Tips for a Healthy Lifestyle",
      image: "https://via.placeholder.com/300", // Replace with real image URLs
      excerpt:
        "Discover ancient wisdom to boost your health and well-being through Ayurveda.",
      content:
        "Ayurveda is a traditional system of medicine rooted in India. Here are 5 tips to incorporate Ayurveda into your daily routine...",
    },
    {
      id: 2,
      title: "Herbs for Mental Clarity in Ayurveda",
      image: "https://via.placeholder.com/300",
      excerpt:
        "Learn about powerful herbs like Brahmi and Ashwagandha to enhance mental clarity and focus.",
      content:
        "Mental clarity is vital for a productive life. In Ayurveda, herbs like Brahmi and Ashwagandha are known for their cognitive benefits...",
    },
    {
      id: 3,
      title: "The Role of Diet in Ayurveda",
      image: "https://via.placeholder.com/300",
      excerpt:
        "Explore how a balanced Ayurvedic diet can improve your health and vitality.",
      content:
        "Ayurveda emphasizes the importance of a diet tailored to your body type (dosha). Learn how to eat for optimal health...",
    },
  ];

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Ayurvedic Section
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <button
                onClick={() => navigate(`/ayurveda/${blog.id}`)}
                className="text-primary font-medium"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ayurveda;
