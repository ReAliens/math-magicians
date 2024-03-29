import React from 'react';
import PropTypes from 'prop-types';

const SignButton = ({ sign, type, handleClick }) => (
  <button
    className={`w-full h-[100px] ${
      type === 'basic'
        ? 'bg-orange-400 hover:bg-orange-700 hover:text-yellow-50 '
        : 'bg-slate-200 hover:bg-slate-700 hover:text-yellow-50'
    } border border-black text-2xl`}
    type="button"
    name={sign}
    onClick={handleClick}
  >
    {sign}
  </button>
);

SignButton.propTypes = {
  sign: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SignButton;
