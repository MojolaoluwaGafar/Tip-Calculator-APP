import { FiDollarSign, FiUser } from "react-icons/fi";
import React, { useState } from "react";


const TipCalculator = () => {
  const [bill, setBill] = useState(142.55);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [numberOfPeople, setNumberOfPeople] = useState(5);

  const tipAmount = (bill * (tipPercentage / 100)) / numberOfPeople;
  const totalPerPerson = bill / numberOfPeople + tipAmount;

  const handleReset = () => {
    setBill(0);
    setTipPercentage(15);
    setNumberOfPeople(1);
  };

  return (
    <div id="mainbg" className="min-h-screen flex flex-col items-center justify-center p-4">
      
      <h1 id="heading" className="text-3xl font-bold mb-8">
        S P L I <br />T T E R
      </h1>

    
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <div className="space-y-6">
          <div>
            <label className="text-dark-grayish-cyan font-semibold">Bill</label>
            <div className="relative">
              <FiDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />{" "}
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="w-full bg-very-light-grayish-cyan p-2 rounded-lg text-very-dark-cyan text-right font-bold text-xl focus:outline-none focus:ring-2 focus:ring-strong-cyan"
              />
            </div>
          </div>


          <div>
            <label className="text-dark-grayish-cyan font-semibold">
              Select Tip %
            </label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[5, 10, 15, 25, 50].map((percentage) => (
                <button
                  key={percentage}
                  onClick={() => setTipPercentage(percentage)}
                  className={`p-3 rounded-lg text-white font-bold text-xl ${
                    tipPercentage === percentage
                      ? "bg-strong-cyan"
                      : "bg-very-dark-cyan hover:bg-light-grayish-cyan"
                  }`}
                >
                  {percentage}%
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                className="p-3 rounded-lg bg-very-light-grayish-cyan text-very-dark-cyan text-right font-bold text-xl focus:outline-none focus:ring-2 focus:ring-strong-cyan"
              />
            </div>
          </div>

          <div>
            <label className="text-dark-grayish-cyan font-semibold">
              Number of People
            </label>
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="number"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className="w-full bg-very-light-grayish-cyan p-2 rounded-lg text-very-dark-cyan text-right font-bold text-xl focus:outline-none focus:ring-2 focus:ring-strong-cyan"
              />
            </div>
          </div>
        </div>

        <div className="bg-very-dark-cyan rounded-xl p-6 mt-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-semibold">Tip Amount</p>
              <p className="text-grayish-cyan text-sm">/person</p>
            </div>
            <p className="text-strong-cyan font-bold text-3xl">
              ${tipAmount.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-white font-semibold">Total</p>
              <p className="text-grayish-cyan text-sm">/person</p>
            </div>
            <p className="text-strong-cyan font-bold text-3xl">
              ${totalPerPerson.toFixed(2)}
            </p>
          </div>
        </div>


        <button
          onClick={handleReset}
          className="w-full bg-strong-cyan text-very-dark-cyan font-bold text-xl p-3 rounded-lg mt-6 hover:bg-light-grayish-cyan"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default TipCalculator;
