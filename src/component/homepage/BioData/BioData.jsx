"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const BioData = () => {
  const [profiles, setProfiles] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("biodata.json"); // Change URL as needed
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="lg:py-30 py-15 bioData-bg ">
      <div className="max-w-7xl lg:mx-auto px-4 mx-4  relative">
        {/* Section Title */}
        <div className="text-center lg:mb-15 mb-10">
          <h2 className="text-3xl playfair-display md:text-4xl font-bold text-gray-800 mb-4">
            Recently Registered Bio Data
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto lato-regular">
            Explore a vast database of over 60,000 matrimonial biodata of Grooms and Brides.
            Start your search for the ideal life partner today!
          </p>
        </div>

        {/* Swiper Navigation Buttons */}
        <button
          className="absolute cursor-pointer left-0 top-3/5 transform -translate-y-3/5 bg-white p-3 rounded-full shadow-md hover:bg-gray-300 transition"
          onClick={() => swiperRef.current?.slidePrev()}
        >
         <FaArrowLeftLong  className=" text-[#ED2B73]" />
        </button>

        <button
          className="absolute cursor-pointer right-0 top-3/5 transform -translate-y-3/5 bg-white p-3 rounded-full shadow-md hover:bg-gray-300 transition"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaArrowRightLong className=" text-[#ED2B73]" />
        </button>

        {/* Swiper Carousel */}
        <div className="px-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="pb-12 "
        >
          {profiles.map((profile) => (
            <SwiperSlide key={profile.id}>
              <div className="rounded-lg cursor-grab h-full flex flex-col items-center">
                <div className="mx-auto rounded-full flex items-center justify-center mb-6">
                  <Image src={profile.image} alt={profile.name} width={180} height={180} />
                </div>
                <h3 className="text-[18px] lato-regular font-semibold text-[#000000]">{profile.name}</h3>
                <p className="text-gray-600">{profile.age} yrs</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BioData;
