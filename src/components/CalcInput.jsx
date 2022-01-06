import PropTypes from 'prop-types';

const CalcInput = ({ data }) => (
  <p
    id="output"
    className="bg-gray-500 w-full h-[100px] p-5 text-4xl text-white"
  >
    {data}
  </p>
);

CalcInput.propTypes = {
  data: PropTypes.string.isRequired,
};

export default CalcInput;
