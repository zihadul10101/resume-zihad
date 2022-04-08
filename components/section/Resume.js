import React, { useState } from 'react';

const Resume = () => {
    const [edu, setEdu] = useState('education')
    const [exp, setExp] = useState('exprience')
    return (
        <section id="resume" className="border border-red-500 p-6 bg-white  overflow-hidden">

            <div className="container px-5 py-24 mx-auto">
                <div className=" w-full mb-10">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Resume</h1>
                        <div className="h-1 w-16 bg-green-500 rounded"></div>
                    </div>
                </div>
                <div className="mx-auto flex justify-center p-10">
                    <button onClick={() => { setEdu('education'); setExp('') }} className="bg-green-500 hover:bg-green-700 mx-6 my-3 p-3 text-white rounded">Experience</button>
                    <button onClick={() => { setExp('exprience'); setEdu(''); }} className="bg-green-500 hover:bg-green-700 mx-6 my-3 p-3 text-white rounded">Education</button>
                </div>
                {

                    edu === 'education' ? <div className=" w-full flex justify-center items-center">
                        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                            {/* <!-- Stack 1 --> */}
                            <div className="col-span-4 w-full h-full ">
                                <div className="w-full h-full bg-green-500 rounded-md p-2 md:pl-4">
                                    <h1 className="text-white text-xl font-medium py-2">Chearles Technologies Inc</h1>
                                    <p className="text-white sm:text-sm text-xs flex flex-wrap">
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>

                                    </p>
                                </div>
                            </div>
                            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                <div className="h-full w-1 bg-green-500"></div>
                                <div className="absolute w-6 h-6 rounded-full bg-green-500 z-10 text-white text-center">1</div>
                            </div>
                            <div className="col-span-4 w-full h-full"></div>


                            {/* <!-- Stack 2 --> */}
                            <div className="col-span-4 w-full h-full"></div>         <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                <div className="h-full w-1 bg-green-500"></div>
                                <div className="absolute w-6 h-6 rounded-full bg-green-500 z-10 text-white text-center">2</div>
                            </div>
                            <div className="col-span-4 w-full h-full ">
                                <div className="w-full h-full bg-green-500 rounded-md p-2 md:pl-4">                 <h1 className="text-white text-xl font-medium py-2">sindabad-it-solution</h1>
                                    <p className="text-white sm:text-sm text-xs flex flex-wrap">
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>

                                    </p>
                                </div>
                            </div>

                            {/* <!-- Stack 3 --> */}
                            <div className="col-span-4 w-full h-full ">
                                <div className="w-full h-full bg-green-500 rounded-md p-2 md:pl-4">
                                    <h1 className="text-white text-xl font-medium py-2">Programing Hero Spical Endgame</h1>
                                    <p className="text-white sm:text-sm text-xs flex flex-wrap">
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>

                                    </p>
                                </div>
                            </div>
                            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                <div className="h-full w-1 bg-green-500"></div>
                                <div className="absolute w-6 h-6 rounded-full bg-green-500 z-10 text-white text-center">3</div>
                            </div>
                            <div className="col-span-4 w-full h-full"></div>
                        </div>

                    </div> : <>
                        <div className=" w-full flex justify-center items-center">

                            <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                                {/* <!-- Stack 1 --> */}
                                <div className="col-span-4 w-full h-full ">
                                    <div className="w-full h-full bg-green-500 rounded-md p-2 md:pl-4">
                                        <h1 className="text-white text-xl font-medium py-2">Banderban Govt collage</h1>
                                        <p className="text-white sm:text-sm text-xs flex flex-wrap">

                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                    <div className="h-full w-1 bg-green-500"></div>
                                    <div className="absolute w-6 h-6 rounded-full bg-green-500 z-10 text-white text-center">1</div>
                                </div>
                                <div className="col-span-4 w-full h-full"></div>


                                {/* <!-- Stack 2 --> */}
                                <div className="col-span-4 w-full h-full"></div>
                                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                    <div className="h-full w-1 bg-green-500"></div>
                                    <div className="absolute w-6 h-6 rounded-full bg-green-500 z-10 text-white text-center">2</div>
                                </div>
                                <div className="col-span-4 w-full h-full ">
                                    <div className="w-full h-full bg-green-500 rounded-md p-2 md:pl-4">
                                        <h1 className="text-white text-xl font-medium py-2">sindabad-it-solution</h1>
                                        <p className="text-white sm:text-sm text-xs flex flex-wrap">
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>

                                        </p>
                                    </div>
                                </div>

                                {/* <!-- Stack 3 --> */}
                                <div className="col-span-4 w-full h-full ">
                                    <div className="w-full h-full bg-green-500 rounded-md p-2 md:pl-4">
                                        <h1 className="text-white text-xl font-medium py-2">Programing Hero Spical Endgame</h1>
                                        <p className="text-white sm:text-sm text-xs flex flex-wrap">

                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>
                                            <span className="px-2 py-1 bg-green-700 text-white m-2">React Developer</span>

                                        </p>
                                    </div>
                                </div>
                                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                    <div className="h-full w-1 bg-green-500"></div>
                                    <div className="absolute w-6 h-6 rounded-full bg-green-500 z-10 text-white text-center">3</div>
                                </div>
                                <div className="col-span-4 w-full h-full"></div>
                            </div>

                        </div>
                    </>
                }


            </div>
        </section>
    );
};

export default Resume;