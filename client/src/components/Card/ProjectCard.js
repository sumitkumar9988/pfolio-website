import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import clsx from "clsx";
const ProjectCard = ({
  name: title,
  description,
  DemoUrl: externalLink,
  repoUrl: githubLink,
  logo: imageLink,
  rightShift,
}) => {
  return (
    <div>
      <div
        className="flex flex-col   items-center justify-center my-8  bg-black">
        <div
          className={clsx(
            "w-10/12 lg:w-full h-80 flex ",
            rightShift && "lg:flex-row",
            !rightShift && "lg:flex-row-reverse"
          )}
        >
          <div className="w-full lg:w-2/4   relative">
            <img
              className={clsx(
                "absolute object-cover object-center opacity-20 shadow-lg  lg:opacity-100 h-full w-full ",
                rightShift && "lg:rounded-l-xl",
                !rightShift && "lg:rounded-r-xl"
              )}
              src={imageLink}
              alt=""
            />
            <div className="block lg:hidden bg-opacity-10 absolute   mx-8 z-10 my-8 text-left">
              <div
                className="text-xl font-bold font-rubik md:text-2xl text-white"
              >
                {title}
              </div>
              <div
                className=" my-8 text-base h-32 overflow-clip overflow-hidden rounded  text-gray-200"
              >
                {description}
              </div>
              <div className="flex flex-row z-50 pt-4">
                <div className="z-10">
                  <a target="_blank" rel="noreferrer" href={githubLink}>
                    <FaGithub className="  w-6 mx-2 h-8 text-white" />
                  </a>
                </div>
                <div className="z-10">
                  <a target="_blank" rel="noreferrer" href={externalLink}>
                    <FaLink className="text-white  w-6 mx-2 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              ` hidden lg:block lg:w-2/4 bg-gray-900 shadow-lg`,
              rightShift && "rounded-r-xl",
              !rightShift && "rounded-l-xl"
            )}
          >
            <div
              className={clsx(
                "absoulte flex flex-col mx-8 my-8",
                rightShift && "text-right",
                !rightShift,
                "text-left"
              )}
            >
              <div
                className={`text-xl font-bold font-rubik md:text-2xl text-white`}
              >
                {title}
              </div>
              <div
                className={` my-8 text-base h-32 overflow-clip overflow-hidden rounded text-gray-200`}
              >
                {description}
              </div>
              <div className="relative">
                <div
                  className={clsx(
                    "absolute flex flex-row ",
                    rightShift && " right-0 "
                  )}
                >
                  <div>
                    <a target="_blank" rel="noreferrer" href={githubLink}>
                      <FaGithub className="w-6 mx-2 h-8" />
                    </a>
                  </div>
                  <div>
                    <a target="_blank" rel="noreferrer" href={externalLink}>
                      <FaLink className="w-6 mx-2 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
