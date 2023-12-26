// Importing the 'useState' hook from the 'react' library
import { useState } from 'react';
// Importing the 'InputBox' component and the 'useCurrencyInfo' custom hook
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

// Defining the functional component named 'App'
function App() {
  // State variables for managing the amount, source currency, target currency, and converted amount
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Custom hook 'useCurrencyInfo' returns currency information based on the source currency
  const currencyInfo = useCurrencyInfo(from);

  // Extracting currency options from the 'currencyInfo' object
  const options = Object.keys(currencyInfo);

  // Function to swap the source and target currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Function to perform currency conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // JSX for rendering the UI of the component
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* InputBox component for the source currency */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap button for exchanging source and target currencies */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* InputBox component for the target currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>

            {/* Submit button for initiating the currency conversion */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Exporting the 'App' component as the default export
export default App;
