import "../build/output.css";
import "/public/search.svg";

// import { useState, useRef, useEffect } from "react";

function Header() {
  return (
    <div className="bg-black border-b-2 border-white text-white flex justify-between py-4 px-3 items-center">
      <div className="flex gap-6 items-center">
        {/* LOGO */}
        <a className="flex gap-4 items-center" href="">
          <img src="http://placehold.it/" />
          <span>Alex.Dev</span>
        </a>
        <ul className="flex gap-6">
          <li>
            <a className="text-gray-400 hover:text-blue-400 transition-all duration-200 ease-in-out font-semibold hover:border-b-2 border-blue-400 cursor-pointer text-base py-2">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-blue-400 transition-all duration-200 ease-in-out font-semibold hover:border-b-2 border-blue-400 cursor-pointer text-base py-2">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-blue-400 transition-all duration-200 ease-in-out font-semibold hover:border-b-2 border-blue-400 cursor-pointer text-base py-2">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-blue-400 transition-all duration-200 ease-in-out font-semibold hover:border-b-2 border-blue-400 cursor-pointer text-base py-2">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-blue-400 transition-all duration-200 ease-in-out font-semibold hover:border-b-2 border-blue-400 cursor-pointer text-base py-2">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="flex gap-5">
        <div className="flex relative items-center ">
          <input
            className=" px-3 w-[20rem]  py-2 rounded-xl bg-transparent outline-none border-white/25  border-[0.5px]"
            placeholder="Search Portfolio"
          ></input>
          <svg
            className="absolute right-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="rgba(234,227,227,1)"
          >
            <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
          </svg>
        </div>
        {/* TOGGLE */}
        <img
          className="rounded-full h-[35px] w-[35px] "
          src="/profile.jpg"
          alt="profile"
          //   style={"height: 20px, width: 20px"}
        />
      </div>
    </div>
  );
}

export default Header;

// LIGHT MODE
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path></svg>

// DARK MODE
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>  */
}
