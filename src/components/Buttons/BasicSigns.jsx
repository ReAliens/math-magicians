import React from 'react';
import PropTypes from 'prop-types';

const SignButton = ({ sign, type }) => (
  <button
    className={`w-full h-[100px] ${
      type === 'basic' ? 'bg-orange-400 ' : 'bg-slate-200'
    } border border-black text-2xl`}
    type="button"
  >
    {sign}
  </button>
);

SignButton.propTypes = {
  sign: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SignButton;
