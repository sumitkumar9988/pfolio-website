import React from "react";

const Experience = ({ degree, institute, startDate, endDate,  last }) => {
  return (
    <div>
      <div className="relative flex items-center mt-14">
        {!last && (
          <div
            className="absolute h-20 mt-32 ml-1 w-0.5 bg-white"
          />
        )}
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="ml-8 text-gray-200">
          <p className="text-base font-rubik font-medium">{degree}</p>
          <p className="text-base">{institute}</p>
          <p className="flex items-center text-sm mt-0.5 text-gray-200">
            {startDate} -- {endDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
