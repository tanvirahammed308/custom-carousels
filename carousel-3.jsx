// keep it in json folder

// src/data/testimonials.json
[
    {
      "id": 1,
      "name": "Sarah Johnson",
      "role": "Marketing Director",
      "content": "This product has transformed our workflow!",
      "avatar": "https://randomuser.me/api/portraits/women/44.jpg",
      "rating": 5
    },
    {
      "id": 2,
      "name": "Michael Chen",
      "role": "Product Manager",
      "content": "Excellent support and easy to implement.",
      "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
      "rating": 4
    },
    {
      "id": 3,
      "name": "Emma Williams",
      "role": "CEO",
      "content": "Our team productivity increased by 40%.",
      "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
      "rating": 5
    }
  ]

//   npm install react-slick slick-carousel

// src/components/TestimonialCarousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Import JSON data
    const loadTestimonials = async () => {
      try {
        const data = await import('../data/testimonials.json');
        setTestimonials(data.default);
        setLoading(false);
      } catch (error) {
        console.error("Error loading testimonials:", error);
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        style={{ 
          color: i < rating ? 'gold' : '#ccc',
          fontSize: '20px'
        }}
      >
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading testimonials...</div>;
  if (!testimonials.length) return <div style={{ textAlign: 'center', padding: '20px' }}>No testimonials available</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Customer Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ marginBottom: '15px' }}>
              {renderStars(testimonial.rating)}
            </div>
            <p style={{ 
              fontSize: '18px', 
              fontStyle: 'italic',
              marginBottom: '20px'
            }}>
              "{testimonial.content}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%',
                  marginRight: '15px',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h4 style={{ margin: '0' }}>{testimonial.name}</h4>
                <p style={{ margin: '5px 0 0', color: '#666' }}>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;