
//  npm install react-slick slick-carousel

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechCorp',
      content: 'This service has completely transformed our customer engagement. The results have exceeded our expectations in every way possible.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      content: 'Incredible support and seamless integration. Our team productivity increased by 40% after implementation.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'CEO, Digital Solutions',
      content: 'The perfect balance of functionality and design. Our clients love the new experience.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'CTO, Startup Ventures',
      content: 'Rare to find a solution that delivers exactly what it promises. Highly recommended for any tech team.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        What Our Clients Say
      </h2>
      
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4 focus:outline-none">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-lg italic text-gray-600 mb-8">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;