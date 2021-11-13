import React from "react";
import PropTypes from 'prop-types';


const Footer = ({ theme, user }) => {
  return (
    <p className={`py-8 text-sm font-light text-center ${theme.textColor1}`}>
      <p className="hover:opacity-80 transition-opacity" rel="noreferrer">
        {user.name.split(" ")[0]} .
      </p>
    </p>
  );
};

Footer.propTypes={
  theme: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}


export default Footer;
