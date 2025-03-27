import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import partner from '../../../app/assets/partner.png'
import verified from '../../../app/assets/circle.png'
import satisfaction from '../../../app/assets/satisfaction.png'
import matches from '../../../app/assets/matches.png'
import { FaArrowRightLong } from 'react-icons/fa6';


const WhyUs = () => {

    return (
        <section className="py-16 why-us-bg relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 grid-cols-1  items-center lg:gap-30 gap-10">
                    {/* Left Column - Image */}
                    <div className="w-full mx-auto flex justify-center z-1000   ">

                        <Image
                            src={partner}
                            alt="Happy couple from Kshatriya Thakor community"
                            width={527}
                            height={600}
                            className=" "
                        />

                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full ">
                        <h2 className="text-xl md:text-xl font-bold lato-bold text-[#ED2B73] mb-6">Why Us?</h2>
                        <h3 className="md:text-4xl leading-12 text-3xl text-[#000000] playfair-display font-bold mb-6">
                            Make your search for a partner fast, easy, and secure
                        </h3>
                        <p className="text-lg text-[#000000] mb-8 lato-regular ">
                            The Trusted Matrimonial Website for the Kshatriya Thakor Samaj
                        </p>

                        <div className="space-y-6 mb-8 flex flex-wrap lg:justify-start justify-center lg:gap-10 gap-6">
                            <div className="flex flex-col gap-5">
                                <div className=" mx-auto w-20 flex justify-center items-center content-center   h-20">
                                    <Image src={verified} alt={verified} height={76} width={80}></Image>

                                </div>
                                <div>
                                    <h3 className="text-[16px] lato-bold   text-[#000] mb-1">Verified Profiles</h3>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="  mx-auto w-20  justify-center items-center content-center  h-20">
                                    <Image src={satisfaction} alt={satisfaction} height={76} width={76}></Image>

                                </div>
                                <div>
                                    <h3 className="text-[16px] lato-bold font-semibold text-[#000] mb-1">Satisfaction Guaranteed</h3>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="  mx-auto w-20 justify-center items-center content-center h-20 ">
                                    <Image src={matches} alt={matches} height={65} width={80}></Image>

                                </div>
                                <div>
                                    <h3 className="text-[16px] lato-bold font-semibold text-[#000] mb-1">Best Matches</h3>
                                </div>
                            </div>

                        </div>

                        <div className=' mx-auto '> <Link
                            href="/register"
                            className=" flex lato-bold max-w-[200px] mx-auto lg:mx-0 justify-center items-center  gap-3 py-3 bg-[#ED2B73]  text-white font-semibold rounded-full  text-lg"
                        >
                            Register Free <FaArrowRightLong className=" text-white" />
                        </Link></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;