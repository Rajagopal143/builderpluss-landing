"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company Inc.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "This product exceeded my expectations! The team was highly professional and the service provided was excellent.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO, Tech Solutions",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Fantastic experience! The solution is innovative, and it has greatly improved our workflow.",
  },
  {
    id: 3,
    name: "Robert Brown",
    position: "Product Manager, Creative Corp.",
    imageUrl: "https://randomuser.me/api/portraits/men/54.jpg",
    review:
      "An absolute game-changer! Highly recommend this product to anyone looking to optimize their processes.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Clients Say
      </h2>
      <div className="flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrevClick}
          className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
          <FiChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Testimonial Content */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm text-center flex flex-col items-center">
          <Image
            src={currentTestimonial.imageUrl}
                      alt={currentTestimonial.name}
                      width={1000}
                      height={1000}
            className="w-20 h-20 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-700">
            {currentTestimonial.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            {currentTestimonial.position}
          </p>
          <p className="text-gray-600 italic">{currentTestimonial.review}</p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextClick}
          className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
          <FiChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
