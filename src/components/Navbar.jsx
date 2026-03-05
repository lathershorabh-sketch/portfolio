import navlogo from "../assets/images/navlogo.svg";
import { Navlist } from "./common/Helper";
import { CloseIcon, Hamburger } from "./common/Icons";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex max-w-[585.96px] md:max-w-200 lg:max-w-285  justify-between items-center mx-auto px-5 xl:px-0">
        <img
          className="max-w-18.25 lg:max-w-30 w-full"
          src={navlogo}
          alt="navlogo"
        />
        <div className="hidden lg:flex max-w-[235.93px] md:max-w-120 w-full justify-between items-center font-rubik">
          <ul className="text-medium-white flex justify-between text-[7.4px] md:text-[10.2px] lg:text-[16px] gap-[34.86px] cursor-pointer ">
            {Navlist.map((links, sourabh) => (
              <li key={sourabh} className="hover: duration-300 ease-in-out">
                <a className="relative group" href="#">
                  {links}
                  <span className="absolute group-hover:w-full  transition-all duration-300 ease-in-out left-0 w-0 h-px bg-white -bottom-1"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="text-white  hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  duration-300 ease-linear border border-[#5F5F5F] hover:border-white px-4.5 py-[7.78px] rounded-[15.9px] lg:rounded-[20px] text-[7.4px] lg:text-[16px]">
            Contact
          </button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="block lg:hidden z-50 duration-500 ease-in-out"
        >
          {open ? <CloseIcon /> : <Hamburger />}
        </button>
        <ul
          className={`fixed inset-0 bg-white z-30 transition-all duration-500 ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-center items-center flex-col gap-4 min-h-screen text-2xl">
            {Navlist.map((links, sourabh) => (
              <a
                key={sourabh}
                className="hover:text-white duration-300 transition-all ease-in-out "
                href="#"
                onClick={() => setOpen(false)}
              >
                {links}
              </a>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
