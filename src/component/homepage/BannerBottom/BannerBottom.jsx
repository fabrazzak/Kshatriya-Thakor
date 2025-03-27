import Link from 'next/link';
import React from 'react';
import '../../../styles/style.css';

const BannerBottom = () => {
  return (
    <section className="banner-bottom-bg py-16 md:py-24 px-4 lg:px-0 text-white">
      <div className="max-w-7xl mx-auto px-12 py-10 rounded-3xl bg-[#ED2B73] z-10 text-center">
        <div className="mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-between  lg:gap-20">
          <h2 className="text-2xl lg:text-left md:text-3xl lg:text-4xl font-bold mb-4 playfair-display">
            Discover Your Life Partner with Kshatriya Thakor Sagpan. Do Free Registration Today...
          </h2>

          <div className="max-w-[170px] w-full">
            <Link
              href="/register"
              className="inline-block lato-bold text-[#000000] px-8 py-3 bg-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl mt-6"
            >
              Register Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBottom;
