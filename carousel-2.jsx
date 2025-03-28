
// npm install @heroicons/react framer-motion

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Morgan',
      role: 'Product Designer, UI Labs',
      content: 'The attention to detail in this product is phenomenal. It has significantly improved our design workflow and collaboration.',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Frontend Developer',
      content: 'As a developer, I appreciate how clean the code structure is. Integration was a breeze and performance is top-notch.',
      avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
      rating: 4
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'UX Researcher',
      content: 'Our user testing results showed a 30% improvement in satisfaction after implementing this solution. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'Marcus Lee',
      role: 'CTO, Startup Inc.',
      content: 'The perfect balance between powerful features and intuitive design. Our engineering team loves working with it daily.',
      avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Trusted by Industry Leaders
      </h2>
      
      <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="relative h-96 md:h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-8 md:p-12 flex flex-col"
            >
              <div className="flex mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-gray-700 mb-8 flex-grow">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-6 border-4 border-indigo-100"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-indigo-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-indigo-600 hover:bg-indigo-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-indigo-600 hover:bg-indigo-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;