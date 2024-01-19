import { useState } from "react";

const colourData = {
  gray: "rgb(107, 114, 128)",
  pink: "rgb(236, 72, 153)",
  blue: "rgb(59, 130, 246)",
  orange: "rgb(249, 115, 22)",
  green: "rgb(34, 197, 94)",
};

function Theme({ onColorChange }) {
  const [color, setColor] = useState(colourData.gray);

  const changeColor = (newColor) => {
    setColor(newColor);
    onColorChange(newColor); // Pass the selected color to the parent component
  };

  return (
    <div>
      <div className="flex px-4 gap-3">
        <div className="border rounded-full  h-9 w-9 border-gray-500">
          <span
            onClick={() => changeColor(colourData.gray)}
            className="bg-gray-500 block cursor-pointer rounded-full w-6 h-6"
          ></span>
        </div>
        <div className="border rounded-full  h-9 w-9 border-pink-500">
          <span
            onClick={() => changeColor(colourData.pink)}
            className="bg-pink-500 block cursor-pointer rounded-full w-6 h-6"
          ></span>
        </div>
        <div className="border rounded-full  h-9 w-9 border-blue-500">
          <span
            onClick={() => changeColor(colourData.blue)}
            className="bg-blue-500 block cursor-pointer rounded-full w-6 h-6"
          ></span>
        </div>
        <div className="border rounded-full  h-9 w-9 border-orange-500">
          <span
            onClick={() => changeColor(colourData.orange)}
            className="bg-orange-500 block cursor-pointer rounded-full w-6 h-6"
          ></span>
        </div>
        <div className="border rounded-full  h-9 w-9 border-green-500">
          <span
            onClick={() => changeColor(colourData.green)}
            className="bg-green-500 block cursor-pointer rounded-full w-6 h-6"
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Theme;
