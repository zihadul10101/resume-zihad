import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="border border-red-500 p-6 bg-white  overflow-hidden">

            <div className="container px-5 py-24 mx-auto">
            <div className=" w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Experience</h1>
              <div className="h-1 w-16 bg-indigo-500 rounded"></div>
            </div>
          </div>
                <div className=" w-full flex justify-center items-center">

                    <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                        {/* <!-- Stack 1 --> */}
                        <div className="col-span-4 w-full h-full ">
                            <div className="w-full h-full bg-blue-600 rounded-md p-2 md:pl-4">
                                <h1 className="text-white text-xl font-medium py-2">Chearles Technologies Inc</h1>
                                <p className="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                            </div>
                        </div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-indigo-300"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-blue-600 z-10 text-white text-center">1</div>
                        </div>
                        <div className="col-span-4 w-full h-full"></div>


                        {/* <!-- Stack 2 --> */}
                        <div className="col-span-4 w-full h-full"></div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-indigo-300"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-blue-600 z-10 text-white text-center">2</div>
                        </div>
                        <div className="col-span-4 w-full h-full ">
                            <div className="w-full h-full bg-blue-600 rounded-md p-2 md:pl-4">
                                <h1 className="text-white text-xl font-medium py-2">sindabad-it-solution</h1>
                                <p className="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                            </div>
                        </div>

                        {/* <!-- Stack 3 --> */}
                        <div className="col-span-4 w-full h-full ">
                            <div className="w-full h-full bg-blue-600 rounded-md p-2 md:pl-4">
                                <h1 className="text-white text-xl font-medium py-2">Programing Hero Spical Endgame</h1>
                                <p className="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                            </div>
                        </div>
                        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                            <div className="h-full w-1 bg-indigo-300"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-blue-600 z-10 text-white text-center">3</div>
                        </div>
                        <div className="col-span-4 w-full h-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;