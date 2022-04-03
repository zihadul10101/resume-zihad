import React from 'react';
import { BlogData } from '../../db/db.local'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import SwiperCore, {
  Autoplay, Pagination, FreeMode
} from 'swiper/core';
import Link from 'next/link';
SwiperCore.use([Pagination, FreeMode, Autoplay]);

const Artical = () => {
  console.log();
  return (
    <section id="artical" className="border border-red-500 p-6 bg-white  overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className=" w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Artical</h1>
            <div className="h-1 w-16 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-12">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },

              480: {
                slidesPerView: 1,
                spaceBetween: 20
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }

            }}

            freeMode={true}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {
              BlogData.map(blog => (
                <SwiperSlide key={blog.id} >
                  <div className="p-6 flex flex-col flex-start ">
                    <img className="h-48 rounded w-full object-cover object-center mb-6" src={`/assets/img/testimonials/${blog.img}`} alt="content" />
                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{blog.heading}</h2>
                    <p className="leading-relaxed mb-8">{blog.dec}</p>
                    <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">

                      <Link href={blog.link}>
                        <a className="text-indigo-500 inline-flex items-center">Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </Link>

                    </div>

                  </div>
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Artical;