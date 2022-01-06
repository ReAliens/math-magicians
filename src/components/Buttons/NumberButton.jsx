import React from 'react';
import PropTypes from 'prop-types';

class NumberButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { number, handleClick } = this.props;
    return (
      <button
        className={`w-full h-[100px] bg-slate-200 border border-black text-2xl ${
          number === '0' ? 'col-span-2' : ''
        }`}
        type="button"
        onClick={handleClick}
        name={number}
      >
        {number}
      </button>
    );
  }
}

NumberButton.propTypes = {
  number: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NumberButton;
