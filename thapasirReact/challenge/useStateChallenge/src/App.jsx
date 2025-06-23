import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [stepValue, setStepValue] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + (stepValue > 0 ? stepValue : 1));
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - (stepValue > 0 ? stepValue : 1));
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleStep = (value) => {
    setStepValue(Number(value));
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-bold text-center text-gray-800 p-4">
        useState Challenge
      </h1>
      <div className="flex gap-4 flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Count: {count}</h1>

        <h1>
          Step:
          <input
            type="number"
            className="p-2 rounded-sm outline-none border m-2"
            placeholder="Enter step to jump"
            onChange={(e) => handleStep(e.target.value)}
          />
        </h1>

        <div className="flex gap-2">
          <button
            className="bg-blue-200 rounded-sm p-2"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="bg-red-200 rounded-sm p-2 disabled:opacity-50"
            onClick={handleDecrement}
            disabled={count <= 0}
          >
            Decrement
          </button>
          <button
            className="bg-yellow-200 rounded-sm p-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
