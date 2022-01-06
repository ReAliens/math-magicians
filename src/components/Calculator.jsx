import React from 'react';
import calculate from '../logic/calculate';
import { numbers, signs } from '../static/button';
import SignButton from './Buttons/BasicSigns';
import NumberButton from './Buttons/NumberButton';
import CalcInput from './CalcInput';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calculations: {} };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { calculations } = this.state;
    const buttonName = e.target.name;
    const newCalc = calculate(calculations, buttonName);
    this.setState({ calculations: newCalc });
  }

  render() {
    const {
      calculations: { total, next, operation },
    } = this.state;
    const display = (total || '') + (operation || '') + (next || '') || '0';
    return (
      <div className="w-2/4 items-center">
        <div className="w-full">
          <CalcInput data={display} />
        </div>
        <div className="flex">
          <div className="grid  grid-cols-3  w-4/5 self-start">
            {signs.secondary.map((sign) => (
              <SignButton
                key={sign.id}
                sign={sign.name}
                type="sec"
                handleClick={this.handleClick}
              />
            ))}
            {numbers.map((number) => (
              <NumberButton
                key={number.id}
                number={number.name}
                handleClick={this.handleClick}
              />
            ))}
          </div>
          <div className="flex flex-col w-1/5">
            {signs.basic.map((sign) => (
              <SignButton
                key={sign.id}
                sign={sign.name}
                type="basic"
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
