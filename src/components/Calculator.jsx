import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';
import { numbers, signs } from '../static/button';
import SignButton from './Buttons/BasicSigns';
import NumberButton from './Buttons/NumberButton';
import CalcInput from './CalcInput';

const Calculator = () => {
  const [calcs, setCalcs] = useState({});
  useEffect(() => {
    setCalcs({
      calculations: {
        total: 0,
        next: 0,
        operation: '',
      },
    });
  }, []);
  const handleClick = (e) => {
    const { calculations } = calcs;
    const buttonName = e.target.name;
    const newCalc = calculate(calculations, buttonName);
    setCalcs({ calculations: newCalc });
  };

  const { calculations } = calcs;

  const display = (calculations?.total || '')
      + (calculations?.operation || '')
      + (calculations?.next || '') || '0';

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <h1 className="self-start mt-44 mr-10 text-2xl text-blue-500">Let&#8242;s do some magic here!</h1>
      <div className="w-3/4 self-end mb-10">
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
                handleClick={(e) => handleClick(e)}
              />
            ))}
            {numbers.map((number) => (
              <NumberButton
                key={number.id}
                number={number.name}
                onClick={(e) => handleClick(e)}
              />
            ))}
          </div>
          <div className="flex flex-col w-1/5">
            {signs.basic.map((sign) => (
              <SignButton
                key={sign.id}
                sign={sign.name}
                type="basic"
                handleClick={(e) => handleClick(e)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
