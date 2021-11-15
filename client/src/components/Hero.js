import React from "react";
import {
  AiOutlineGithub,
  AiOutlineDribbble,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import PropTypes from "prop-types";

const Hero = ({ user }) => {
  return (
    <div className=" ">
      <div className="w-full md:w-10/12 lg:w-7/12 mx-auto">
        <div className="pt-24 p-8 lg:p-16 md:pt-32  pb-4">
          <img
            src={user.photo}
            alt="me"
            className={`border rounded-full w-24 h-24 object-cover bg-transparent  md:w-36 md:h-36 mt-36 text-white`}
          />
          <div className="flex items-center">
            <h1
              className={`mt-6 mb-6 text-4xl font-rubik font-bold md:mt-8 md:mb-8 md:text-5xl text-white`}
            >
              Hi, I'm {user.name}! 👋
            </h1>
            {/* <HandWave className="text-4xl md:text-5xl" /> */}
          </div>
          <p
            className={`text-xl font-extrabold tracking-normal md:text-3xl font-rubik    text-gray-200`}
          >
            {user.aboutYou}
          </p>
          <div className="flex flex-row mt-8">
            {user.gitHubAccount ? (
              <p className="" href={`https://github.com/${user.gitHubAccount}`}>
                <AiOutlineGithub
                  className={`h-8 w-8 m-1 text-white`}
                />
              </p>
            ) : null}
            {user.dribbleAccount ? (
              <p className="" href={`${user.dribbleAccount}`}>
                <AiOutlineDribbble
                  className={`h-8 w-8 m-1  text-white`}
                />
              </p>
            ) : null}{" "}
            {user.behanceAccount ? (
              <p className="" href={`${user.behanceAccount}`}>
                <AiFillBehanceCircle
                  className={`h-8 w-8 m-1 text-white`}
                />
              </p>
            ) : null}{" "}
            {user.twitterAcount ? (
              <p className="" href={`${user.twitterAcount}`}>
                <AiFillTwitterCircle
                  className={`h-8 w-8 m-1  text-white`}
                />
              </p>
            ) : null}{" "}
            {user.linkedInAccount ? (
              <p className="" href={`${user.linkedInAccount}`}>
                <AiFillLinkedin
                  className={`h-8 w-8 m-1  text-white`}
                />
              </p>
            ) : null}{" "}
          </div>

          <div className="mt-10">
            <p
              className={` text-base md:text-xl font-rubik text-gray-200`}
            >
              {user.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Hero;
