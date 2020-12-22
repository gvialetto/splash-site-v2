import React, { MouseEvent, TouchEvent } from "react";
import { useColorClassSuffix } from "components/color_provider";

const Avatar = (): JSX.Element => {
  const { colorClassSuffix, setRandomClassSuffix } = useColorClassSuffix()!;

  const handleEvent = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    setRandomClassSuffix();
  };

  const classes = `
    transition ease-in shadow-lg duration-300 mx-auto
    rounded-full h-68 p-3 bg-${colorClassSuffix}
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
