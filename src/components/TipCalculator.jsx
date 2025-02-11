import { FiDollarSign, FiUser } from "react-icons/fi";
import React, { useState } from "react";


const TipCalculator = () => {
  const [bill, setBill] = useState(142.55);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [numberOfPeople, setNumberOfPeople] = useState(5);

  const tipAmount = numberOfPeople > 0 ? (bill * (tipPercentage / 100)) / numberOfPeople : 0;
  const totalPerPerson = numberOfPeople > 0 ? (bill / numberOfPeople) + tipAmount : 0;

  const handleReset = () => {
    setBill(0);
    setTipPercentage("");
    setNumberOfPeople(1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mainbg">
      <h1 className="text-3xl font-bold m-8">
        S P L I <br />T T E R
      </h1>

      <div className="bg-white flex flex-col lg:flex-row gap-3  rounded-2xl shadow-lg p-6 w-full max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="font-bold">Bill</label>
            <div className="relative">
              <FiDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />{" "}
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="w-full p-2 rounded-lg text-right font-bold text-xl"
              />
            </div>
          </div>

          <div>
            <label className="font-bold">Select Tip %</label>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
              {[5, 10, 15, 25, 50].map((percentage) => (
                <button
                  key={percentage}
                  onClick={() => setTipPercentage(percentage)}
                  className={`p-3 rounded-lg text-white font-bold text-xl ${
                    tipPercentage === percentage
                      ? "btnstrongcyan"
                      : "btnverydarkcyan"
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
                className="p-3 percentageinput rounded-lg text-right font-bold text-xl"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label className="font-bold">Number of People</label>
              {numberOfPeople === "0" && (
                <span className=" font-semibold text-sm">
                  Can't be zero
                </span>
              )}
            </div>
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="number"
                min={1}
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className={`w-full p-3 pl-10 rounded-lg text-right font-bold text-xl
        ${
          numberOfPeople === "0"
            ? "peopleinputinactive"
            : "peopleinputactive"
        }`}
              />
            </div>
          </div>
        </div>

        <div className="totalcard rounded-xl p-6 mt-6 lg:w-2xl">
          <div className="grid md:grid-col content-between">
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-bold">Tip Amount</p>
                  <p className="perperson text-sm font-thin">/ person</p>
                </div>
                <p className="textstrongcyan font-bold text-3xl">
                  ${tipAmount.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 md:mt-8">
                <div>
                  <p className="text-white font-bold">Total</p>
                  <p className="perperson text-sm font-thin">/ person</p>
                </div>
                <p className="textstrongcyan font-bold text-3xl">
                  ${totalPerPerson.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="lg:mt-20">
              <button
                onClick={handleReset}
                className="w-full resetbtn font-bold text-xl p-3 rounded-lg mt-6"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
