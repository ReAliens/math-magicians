import React from 'react';
import PropTypes from 'prop-types';

const NumberButton = ({ number, onClick }) => (
  <button
    className={`w-full h-[100px] bg-slate-200 border border-black text-2xl ${
      number === '0' ? 'col-span-2' : ''
    }`}
    type="button"
    onClick={onClick}
    name={number}
  >
    {number}
  </button>
);

NumberButton.propTypes = {
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NumberButton;
