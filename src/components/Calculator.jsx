import React from 'react';
import { numbers, signs } from '../static/button';
import SignButton from './Buttons/BasicSigns';
import NumberButton from './Buttons/NumberButton';
import CalcInput from './CalcInput';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="w-2/4 items-center">
        <div className="w-full">
          <CalcInput />
        </div>
        <div className="flex">
          <div className="grid  grid-cols-3  w-4/5 self-start">
            {signs.secondary.map((sign) => (
              <SignButton key={sign.id} sign={sign.name} type="sec" />
            ))}
            {numbers.map((number) => (
              <NumberButton key={number.id} number={number.name} />
            ))}
          </div>
          <div className="flex flex-col w-1/5">
            {signs.basic.map((sign) => (
              <SignButton key={sign.id} sign={sign.name} type="basic" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
