import { useState } from "react";

const colourData = {
  gray: "rgb(107, 114, 128)",
  pink: "rgb(236, 72, 153)",
  blue: "rgb(59, 130, 246)",
  orange: "rgb(249, 115, 22)",
  green: "rgb(34, 197, 94)",
};

function useTheme() {
  const [color, setColor] = useState(colourData.gray);

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return { color, changeColor };
}

export default useTheme;
