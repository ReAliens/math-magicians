import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="h-[60px] w-screen flex fixed top-0 justify-between items-center px-5 bg-slate-300">
      <span className="text-3xl text-red-800 text-left animate-bounce">
        Math Magician
      </span>
      <div className="flex w-2/4 text-red-800 text-3xl justify-around">
        <Link
          to="/"
          className={
            location.pathname === '/' ? 'text-yellow-500 underline' : ''
          }
        >
          Home
        </Link>
        <Link
          to="/calculator"
          className={
            location.pathname === '/calculator'
              ? 'text-yellow-500 underline'
              : ''
          }
        >
          Calculator
        </Link>
        <Link
          to="/quotes"
          className={
            location.pathname === '/quotes' ? 'text-yellow-500 underline' : ''
          }
        >
          Quotes
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
