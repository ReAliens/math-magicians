import React from 'react';
import PropTypes from 'prop-types';

const NumberButton = ({ number }) => (
  <button
    className={`w-full h-[100px] bg-slate-200 border border-black text-2xl ${
      number === '0' ? 'col-span-2' : ''
    }`}
    type="button"
  >
    {number}
  </button>
);

NumberButton.propTypes = {
  number: PropTypes.string.isRequired,
};

export default NumberButton;
