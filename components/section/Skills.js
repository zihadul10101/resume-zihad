import React, { useState } from 'react';
import Image from 'next/image';
import { skillTittle, skillDb } from '../../db/db.local';

const Skills = ({data}) => {
  const [filter, setFilter] = useState("html");
  let items = skillDb.filter((skill) => skill.name === filter);
  console.log(data);
  return (
    <section className="border border-red-500 p-6 bg-white  overflow-hidden">
      <div className="container px-5 4 mx-auto">
        <div className=" w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Skills</h1>
            <div className="h-1 w-16 bg-indigo-500 rounded"></div>
          </div>
        </div>

        <div className=" flex ">
          <div className="lg:w-4/6 flex flex-wrap">

            {
              skillTittle.map(st => (
                <div key={st.id} className=" lg:w-1/3 p-2">
                  <button onClick={() => setFilter(st.name)} className="px-3 py-5 w-full  text-xl text-gray-100 transition bg-blue-600 rounded-md hover:bg-blue-700">
                    {st.title}
                  </button>
                </div>
              ))
            }


          </div>
          <div className="lg:w-2/6">
            {
              items.map((item => (
                <div key={item.id} className="relative flex items-center justify-center">
                  <svg className="transform -rotate-90 w-72 h-72">
                    <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                      className="text-gray-700" />

                    <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"

                      className="text-blue-500 " />
                  </svg>
                  <span className="absolute text-5xl text-slate-600" >{item.percent}%</span>
                </div>
              )))
            }
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;