import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Headers = ({  user }) => {
  return (
    <div className="absolute z-30 w-full opacity-90 transition-top  flex items-center transform transition duration-200 justify-center mx-auto py-8">
      <div className="w-full md:w-10/12 lg:w-7/12 ">
        <div>
          <Link to="/">
            <div
              className="text-2xl mx-8 lg:mx-16 font-rubik font-semibold text-white"
            >
              {user.name.split(" ")[0]}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

Headers.propTypes={
  user: PropTypes.object.isRequired,
}

export default Headers;
