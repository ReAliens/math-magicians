import React from 'react';
import PropTypes from 'prop-types';

class SignButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sign, type, handleClick } = this.props;

    return (
      <button
        className={`w-full h-[100px] ${
          type === 'basic' ? 'bg-orange-400 ' : 'bg-slate-200'
        } border border-black text-2xl`}
        type="button"
        name={sign}
        onClick={handleClick}
      >
        {sign}
      </button>
    );
  }
}

SignButton.propTypes = {
  sign: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SignButton;
