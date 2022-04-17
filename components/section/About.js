import React from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import aboutImg from '../../public/assets/img/profile-img.jpg'
import { FaDownload } from 'react-icons/fa';
const About = () => {

    return (
        <section id="about" className="border border-red-500 text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto ">
                <div className=" w-full mb-10">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About</h1>
                        <div className="h-1 w-16 bg-green-500 rounded"></div>
                    </div>
                </div>
                <div className="lg:w-4/6 mx-auto">

                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className=" w-full h-full bg-gray-200 text-gray-400">
                                <Image src={aboutImg} />
                            </div>

                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">
                                A deep heart javaScript lover from Bangladesh
                                <br />
                                A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I primarily focus on writing clean, elegant, and eﬃcient code. I am proﬁcient in HTML, CSS, Bootstrap, JavaScript, React, Mongo DB, Node Js, Express Js, Heroku, Firebase, and Netlify . I am always determined to learn & explore new technology.
                            </p>
                            <button
                                className="flex items-center ml-5 animate-bounce bg-green-500  px-3 py-2 text-lg uppercase text-white rounded-lg mt-10 hover:bg-green-700 transform"
                            >
                                <FaDownload className="text-white mr-3" />
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;