import React, { useState } from 'react';
import Image from 'next/image';
import { skillTitledb, skilldb } from '../../db/db.local';

const Skills = () => {
  const [filter, setFilter] = useState("Frontend");
  let items = skilldb.filter(item => item.name.includes(filter));

  console.log(items);


  return (
    <section className=" p-6 bg-white  overflow-hidden">
      <div className="container px-5 4 mx-auto">
        <div className=" w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Skills</h1>
            <div className="h-1 w-16 bg-green-500 rounded"></div>
          </div>
        </div>

        <div className="p-5 md:w-1/2 w-full md:flex flex-wrap justify-center md:mx-auto">
          {
            skillTitledb.map(item => (
              <button key={item.id} onClick={() => setFilter(item.name)} type="button" className={`${filter === item.name ? "bg-green-500 text-white shadow px-3 py-5 rounded m-2" : " bg-white shadow px-3 py-5 rounded m-2 hover:bg-green-700 hover:text-white"}`} >
                {item.title}
              </button>
            ))
          }
        </div>


        <div className="flex flex-wrap">
          {
            items.map((item => (
              <div key={item.id} className="lg:w-1/5 lg:mb-0 mb-6 p-1">
                <div className="h-full text-center">
                  <Image alt="testimonial" width={60} height={60} className=" mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 hover:rotate-180" src={`/assets/img/skills/${item.image}`} />
                  <h1 className="p-3 font-bold text-xl">{item.title}</h1>
                </div>
              </div>
            )))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;