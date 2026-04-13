import React from "react";

const LeftSideHeroText = () => {
  return (
    <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
      <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
        Prospective <br />
        <span className="text-gray-600">customer</span> <br />
        segmentation
      </h3>
      <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde magni
        eos odio vel sunt quibusdam quo vero, accusamus quisquam!
      </p>
    </div>
  );
};

export default LeftSideHeroText;
