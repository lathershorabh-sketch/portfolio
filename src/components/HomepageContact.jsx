import React from "react";

const HomepageContact = () => {
  return (
    <section className="mb-10 lg:mb-20">
      <form className="text-white max-w-285 mx-auto px-5 xl:px-0">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-7 ">
          <input
            className="bg-[#232323] max-w-135 w-full px-4 sm:px-10 py-2 sm:py-5 rounded-[10px] sm:rounded-2xl border  hover:border-text-color-orange-dark hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] ease-linear duration-300"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-[#232323] max-w-135 w-full px-4 sm:px-10 py-2 sm:py-5 rounded-[10px] sm:rounded-2xl border  hover:border-text-color-orange-dark hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] ease-linear duration-300"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-7 gap-6 ">
          <input
            className="bg-[#232323]  hover:border-text-color-orange-darkk max-w-135 w-full px-4 sm:px-10 py-2 sm:py-5 rounded-[10px] sm:rounded-2xl border  hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] ease-linear duration-300"
            type="tel"
            placeholder="Phone Number"
          />
          <select className="bg-[#232323] text-[#959595]   max-w-135 w-full px-4 sm:px-10 py-2 sm:py-5 rounded-[10px] sm:rounded-2xl border border-white hover:border-text-color-orange-dark hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] ease-linear duration-300">
            <option value="">Service of Interest</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-7 gap-6 items-center">
          <input
            className="bg-[#232323] max-w-135 w-full px-4 sm:px-10 py-2 sm:py-5 rounded-[10px] sm:rounded-2xl h-fit border  hover:border-text-color-orange-dark hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] ease-linear duration-300"
            type="Timeline"
            placeholder="Timeline"
          />
          <textarea
            className="bg-[#232323] max-w-135 w-full px-4 sm:px-10 py-2 sm:py-5 rounded-[10px] sm:rounded-2xl border  hover:border-text-color-orange-dark hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] ease-linear duration-300"
            placeholder="Project Details..."
          />
        </div>
        <button className="text-white  ml-auto flex  hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  duration-300 ease-linear border border-[#5F5F5F] hover:border-white px-9 py-3 rounded-[15.9px] lg:rounded-[30px] text-[10.4px] lg:text-[18px] ">
          Send
        </button>
      </form>
    </section>
  );
};

export default HomepageContact;
