import './App.css';
import SignButton from './components/Buttons/BasicSigns';
import NumberButton from './components/Buttons/NumberButton';
import CalcInput from './components/CalcInput';
import { numbers, signs } from './static/button';

function App() {
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

export default App;
