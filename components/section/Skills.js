import React, { useState } from 'react';
import Image from 'next/image';
import { skillTittle, skillDb } from '../../db/db.local';

const Skills = () => {
  const [frontend, setFrontend] = useState('frontend');
  const [backend, setBackend] = useState('backend');
  const [tools, setTools] = useState('tools');




  return (
    <section className="border border-red-500 p-6 bg-white  overflow-hidden">
      <div className="container px-5 4 mx-auto">
        <div className=" w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Skills</h1>
            <div className="h-1 w-16 bg-indigo-500 rounded"></div>
          </div>
        </div>

        <div className="mx-auto flex justify-center p-10">
          <button onClick={() => { setFrontend('frontend'); setBackend(''); setTools('') }} className="bg-indigo-500 mx-6 my-3 p-3">Frontend</button>
          <button onClick={() => { setBackend('backend'); setFrontend(''); setTools('') }} className="bg-indigo-500 mx-6 my-3 p-3">Backend</button>
          <button onClick={() => { setTools('tools'); setFrontend(''); setBackend(''); }} className="bg-indigo-500 mx-6 my-3 p-3">Tools</button>
        </div>

       <div className="flex flex-wrap ">
       <span className="bg-cyan-600 p-5 rounded text-white m-3">HTML</span>
       <span className="bg-cyan-600 p-5 rounded text-white m-3">HTML</span>
       <span className="bg-cyan-600 p-5 rounded text-white m-3">HTML</span>
       <span className="bg-cyan-600 p-5 rounded text-white m-3">HTML</span>
       <span className="bg-cyan-600 p-5 rounded text-white m-3">HTML</span>
       <span className="bg-cyan-600 p-5 rounded text-white m-3">HTML</span>
       <span className="bg-cyan-600 p-5 rounded text-white m-3">HTML</span>
       </div>

      </div>
    </section>
  );
};

export default Skills;