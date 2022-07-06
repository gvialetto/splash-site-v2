import React, { MouseEvent, TouchEvent } from "react";
import { useColor, getBGColor } from "components/color_provider";

const Avatar = (): JSX.Element => {
  const { color, setRandomColor } = useColor()!;

  const handleEvent = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    setRandomColor();
  };

  const classes = `
    transition ease-in shadow-lg duration-300 mx-auto
    rounded-full h-68 p-3 ${getBGColor(color)}
  `;

  return (
    <div className="mt-4">
      <img
        className={classes}
        onMouseEnter={handleEvent}
        onTouchEnd={handleEvent}
        src="images/photo.jpg"
        alt="Personal photo"
      />
    </div>
  );
};

export default Avatar;
