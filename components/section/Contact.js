import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className=" p-6 bg-white  overflow-hidden">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className=" w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">What is Next?</h1>
            <div className="h-1 w-16 bg-green-500 rounded"></div>
          </div>
        </div>
        <div className="lg:w-3/5 m-12 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">Have a suggestion?</h1>
          <p className="leading-relaxed mt-4">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-slate-600 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-white">Subject</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-white mb-2"
              htmlFor="message">Message</label><textarea maxLength="300" name="feedback" id="feedback" rows="4"
                cols="80"
                className="border-0 px-3 py-3   rounded text-sm shadow focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full"
                placeholder="" required></textarea>          </div>

          <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">Button</button>
        </div>
      </div>
    </section>
  );
};
export default Contact;