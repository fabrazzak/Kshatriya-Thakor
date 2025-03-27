'use client';

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import quote from '../../../app/assets/quote.png'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {   
    const mockTestimonials = [
      {
        id: 1,
        quote: "It is said that matches are made in heaven. But our match was made at Kshatriya Thakor Samaj. We are really thankful to their efforts.",
        name: "- Panthi & Jenil",
       
      },
      {
        id: 2,
        quote: "The platform helped me find my perfect life partner within our community. Excellent service!",
        name: "-  Rahul & Thakor",
       
      },
      {
        id: 3,
        quote: "Trustworthy and genuine profiles. We found our son's bride through this platform.",
        name: "-  Harshad & Bhai",
        
      }
    ];
    setTestimonials(mockTestimonials);
  }, []);

  return (
    <section className="lg:py-30 py-15 testimonial-bg">
      <div className="max-w-7xl lg:mx-auto px-4 mx-4 relative">
        {/* Section Title */}
        <div className="text-center lg:mb-15 mb-10">
          <h2 className="text-xl lato-bold md:text-xl  font-bold text-[#ED2B73] mb-4">
            Testimonials
          </h2>
          <p className="text-4xl text-[#fff] max-w-md leading-14 mx-auto playfair-display">
            Don't take our word for it. Over 100+ people trust us.
          </p>
        </div>

       

        {/* Swiper Carousel */}
        <div className="px-10 relative">
             {/* Swiper Navigation Buttons */}
        <button
          className="absolute cursor-pointer left-0 top-2/3 transform -translate-y-2/3 bg-white p-3 rounded-full shadow-md hover:bg-gray-300 transition z-10"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaArrowLeftLong className="text-[#ED2B73]" />
        </button>

        <button
          className="absolute cursor-pointer right-0 top-2/3 transform -translate-y-2/3 bg-white p-3 rounded-full shadow-md hover:bg-gray-300 transition z-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaArrowRightLong className="text-[#ED2B73]" />
        </button>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className=" lg:p-8 rounded-lg cursor-grab h-full flex flex-col lg:gap-10 gap-6 items-center text-center">
                  <div className="max-w-24    mb-6 ">
                  <Image src={quote} alt={quote} width={93} height={56} 
                      className="w-full h-full "
                    />
                  </div>                  
                    
                 
                  <p className="text-[18px] max-w-xl lato-regular font-semibold text-[#ffffff]">
                    {testimonial.quote}
                  </p>

                  <h2 className="text-[26px] playfair-display font-semibold text-[#ffffff]">
                    {testimonial.name}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;