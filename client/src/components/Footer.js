import React from "react";
import PropTypes from 'prop-types';


const Footer = ({  user }) => {
  return (
    <p className="py-8 text-sm font-light text-center text-white">
      <p className="hover:opacity-80 transition-opacity" rel="noreferrer">
        {user.name.split(" ")[0]} .
      </p>
    </p>
  );
};

Footer.propTypes={
  user: PropTypes.object.isRequired,
}


export default Footer;
