import React, { useState } from 'react';
import { servicedb, serviceTitle } from '../../db/db.local';
import Image from 'next/image';
const Service = () => {
  const [filter, setFilter] = useState("design");
  let items = servicedb.filter((item) => item.name === filter);

  return (
    <section id="services" className=" p-6 bg-white  overflow-hidden">
      <div className="container px-5 py-20 mx-auto">
        <div className=" w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Service</h1>
            <div className="h-1 w-16 bg-green-500 rounded"></div>
          </div>
        </div>
        <div className="flex  flex-wrap m-12">
          <div data-aos="fade-right" className="p-4 md:w-5/12  w-full">
            <div className="flex  lg:flex flex-wrap">
              {
                serviceTitle.map((item => (
                  <div key={item.id} className="w-3/6 lg:w-1/3 p-2">
                    <button onClick={() => setFilter(item.name)} className={`${filter === item.name ? "bg-green-500 text-white w-full shadow px-3 py-5 rounded m-2" : "w-full bg-white shadow px-3 py-5 rounded m-2 hover:bg-green-700 hover:text-white"}`}>
                      <Image className="object-cover  mx-auto p-1" width={50} height={50} src={`/assets/Img/service/${item.image}`} alt="serviceImage" />
                      <h4>{item.title}</h4>
                    </button>
                  </div>
                )))
              }
            </div>
          </div>

          <div data-aos="fade-left" className="p-4 shadow  lg:flex md:w-7/12 w-full">
            <div  >
              {
                items.map((item => (
                  <div key={item.id} className="bg-white py-5 px-10">
                    <h4 className="py-3 text-2xl font-bold
                                    ">{item.title}</h4>
                    <p className="py-3 text-md font-normal">{item.description}</p>

                  </div>
                )))
              }
            </div>

            {
              items.map((item => (
                <div  key={item.id} className="w-full overflow-hidden">
                  <div className="object-cover w-96">
                    <Image  width={300} height={300} src={`/assets/Img/service/${item.image}`} alt="" />
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