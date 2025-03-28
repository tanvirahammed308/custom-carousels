
// keep it json folder

[
    {
      "id": 1,
      "name": "Alex Morgan",
      "role": "Product Manager, TechCorp",
      "quote": "This product revolutionized our workflow. The intuitive interface saved us countless hours.",
      "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
      "rating": 5
    },
    {
      "id": 2,
      "name": "Priya Patel",
      "role": "UX Designer, Creative Labs",
      "quote": "Exceptional performance and stunning design. Our team adoption was seamless.",
      "avatar": "https://randomuser.me/api/portraits/women/44.jpg",
      "rating": 4
    },
    {
      "id": 3,
      "name": "James Wilson",
      "role": "CTO, Startup Inc.",
      "quote": "The customer support alone is worth it. The product is just the cherry on top.",
      "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
      "rating": 5
    }
  ]


//   npm install react-slick slick-carousel


  import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await import('../data/testimonials.json');
        setTestimonials(data.default);
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    arrows: false,
    appendDots: dots => (
      <div className="mt-8">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-indigo-500 transition-colors" />
    )
  };

  if (loading) return (
    <div className="text-center py-12 text-gray-500">Loading testimonials...</div>
  );

  if (!testimonials.length) return (
    <div className="text-center py-12 text-gray-500">No testimonials available</div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Trusted by Innovators
      </h2>

      <Slider {...settings} className="px-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-2 focus:outline-none">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg text-center text-gray-600 italic mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-indigo-100"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-indigo-600">{testimonial.role}</p>
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