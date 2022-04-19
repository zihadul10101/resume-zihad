import React from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import aboutImg from '../../public/assets/img/profile-img.jpg'
import { FaDownload } from 'react-icons/fa';
const About = () => {

    return (
        <section id="about" className="border border-sate-900 text-gray-600 body-font">
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
                            <p className="leading-relaxed font-medium text-lg mb-4">
                                I am a Front-end developer Always ready to prove myself through my work and responsibility. I specialize in JavaScript and My role is Frontend Developer || React js Developer || MERN Stack, Developer
                            </p>
                            <p >My specialties include quickly learning new skills and programming languages, problem-solving, responsive design principles, website optimization, and Model View Controller (MVC) methods of organizing code. So far I have JavaScript, React js, HTML, CSS, Bootstrap, Tailwindcss, and Git/GitHub under my belt. I have started learning Node.JS, MongoDB, and Express.JS. I am still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into the coding web in my head.</p>
                            <button
                                className="flex items-center ml-5 animate-bounce bg-green-500  px-3 py-2 text-lg  text-slate-800 font-medium rounded-lg mt-10 hover:bg-green-700 transform"
                            >
                                <FaDownload className="text-slate-800 mr-3" />
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