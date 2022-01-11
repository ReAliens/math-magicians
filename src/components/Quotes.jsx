import quotes from '../static/quotes';

const Quotes = () => {
  const randomItem = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <p className="text-4xl text-center mx-auto font-mono font-bold">
        &rdquo;
        {randomItem.quote}
        &rdquo;
      </p>
      <span className="mt-10 text-xl">{randomItem.autor}</span>
    </div>
  );
};
export default Quotes;
