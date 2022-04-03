import React, { useState } from 'react';
import { servicedb, serviceTitle } from '../../db/db.local';
import Image from 'next/image';
const Service = () => {
  const [filter, setFilter] = useState("design");
  let items = servicedb.filter((item) => item.name === filter);
 
  return (
    <section id="services" className="border border-red-500 p-6 bg-white  overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className=" w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Service</h1>
            <div className="h-1 w-16 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex  flex-wrap -m-4">
          <div className="p-4 md:w-5/12  w-full">
            <div className="flex  lg:flex flex-wrap">
              {
                serviceTitle.map((item => (
                  <div key={item.id}className="w-3/6 lg:w-1/3 p-2">
                    <button onClick={() => setFilter(item.name)} className={`${filter === item.name ? "bg-blue-600 text-white w-full shadow px-3 py-5 rounded m-2" : "w-full bg-white shadow px-3 py-5 rounded m-2 hover:bg-orange-600 hover:text-white"}`}>
                      <Image className="object-contain  mx-auto p-1" width={16} height={0} src={`/assets/Image/service/${item.image}`} alt="" />
                      <h4>{item.title}</h4>
                    </button>
                  </div>
                )))
              }
            </div>
          </div>

          <div className="p-4 shadow  lg:flex md:w-7/12 w-full">
            <div className="">
              {
                items.map((item => (
                  <div key={item.id}className="bg-white py-5 px-10">
                    <h4 className="py-3 text-2xl font-bold
                                    ">{item.title}</h4>
                    <p className="py-3 text-md font-normal">{item.description}</p>
                    
                  </div>
                )))
              }
            </div>

            {
              items.map((item => (
                <div key={item.id}className="w-full overflow-hidden">
                  <div className="object-contain w-96">
                    <Image className="w-full h-full" width={300} height={300} src={`/assets/Img/service/${item.image}`} alt="" />
                  </div>
                </div>
              )))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;