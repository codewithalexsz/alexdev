import "../build/output.css";
import { useState } from "react";
import Theme from "./theme.jsx";

function Hero() {
  const [backgroundColor, setBackgroundColor] = useState("rgb(107, 114, 128)");

  const handleColorChange = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    //WRAPPER
    <div
      // style={{ backgroundColor }}
      className="px-10   mx-auto  text-white py-4"
    >
      {/* TOP */}
      <div className="flex py-2 justify-between">
        <div>
          <h2 className="text-3xl font-bold">Andrew Alex</h2>
          <p className="text-gray-500 mb-4 font-semibold">
            steadily deploying products
          </p>
        </div>

        {/* COLOR PICKER */}
        <Theme onColorChange={handleColorChange} />
      </div>

      {/* BOTTOM */}
      <div className="wrapper border-[1px] border-white/20 shadow-lg rounded-[10px] bg-[#020817] h-[28rem]  flex">
        <div className="left relative justify-center w-[60%] flex">
          <div style={{ backgroundColor }} className=" w-[40%] flex items-end">
            <div className="flex gap-3 h-fit p-3 ">
              <span className="w-5 h-5 rounded-full bg-yellow-500"></span>
              <span className="w-5 h-5 rounded-full bg-yellow-500"></span>
              <span className="w-5 h-5 rounded-full bg-yellow-500"></span>
            </div>
          </div>
          <div className=" w-[60%]"></div>
          <img
            className="rounded-full absolute top-[20%] left-[20%] h-[16rem] w-[16rem]"
            src="/profile.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-col  justify-center">
          <h1 className="text-2xl font-semibold ">Alex.Dev</h1>
          <p className="text-[18px] font-bold">Software Engineer</p>
          <p className="text-[16px]"> lorem10 </p>
          <div className="flex gap-7">
            <button
              style={{ backgroundColor }}
              className="py-2 px-9 font-semibold tracking-wide  rounded-lg"
            >
              View Resume
            </button>
            <button
              style={{ backgroundColor }}
              className="py-2 px-9 font-semibold tracking-wide  rounded-lg"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
