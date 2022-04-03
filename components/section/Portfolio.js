import React, { useState } from 'react';
import { projectdb, projectTitledb } from '../../db/db.local';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import Link from 'next/link';
const Portfolio = () => {
    const [filter, setFilter] = useState("all");
    let items = projectdb.filter(item => item.name.includes(filter));
    console.log(items);
    return (
        <section id="portfolio" className="border border-red-500 text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className=" w-full mb-10">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Portfolio</h1>
                        <div className="h-1 w-16 bg-indigo-500 rounded"></div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full md:flex flex-wrap justify-center md:mx-auto">
                    {
                        projectTitledb.map(item => (
                            <button key={item.id} onClick={() => setFilter(item.name)} type="button" className={`${filter === item.name ? "bg-blue-600 text-white shadow px-3 py-5 rounded m-2" : " bg-white shadow px-3 py-5 rounded m-2 hover:bg-slate-600 hover:text-white"}`} >
                                {item.title}
                            </button>
                        ))
                    }
                </div>
                <div className="flex flex-wrap gap-5 justify-center my-10">
                    {
                        items.map((item => (
                            <div key={item.id} className="overflow-hidden shadow-lg rounded md:w-1/2 w-full lg:w-1/4 cursor-pointer">
                                <div className="block h-full mx-auto relative group">
                                    <img alt="project" src={`assets/img/portfolio/${item.project.projectImg}`} className="max-h-72 object-cover" />
                                    <div className="bg-slate-700  w-full h-20 hidden group-hover:flex items-center justify-around  absolute bottom-0 left-0 z-20">
                                        <Link href={item.project.liveLink} >
                                            <a className="bg-white-800 rounded-full"  >
                                                <span className='text-4xl text-white'><BsLink45Deg /></span>
                                            </a>
                                        </Link>
                                        <Link href={item.project.githubLink}>
                                            <a className="bg-white-800 rounded-full"  >
                                                <span className='text-4xl text-white'><BsGithub /></span>
                                            </a>
                                        </Link>


                                    </div>
                                </div>
                            </div>
                        )))
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;