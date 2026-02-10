import { useState } from "react";

export default function MyFormButton() {
  const [name, setName] = useState("");
  const [randomNumber, setRandomNumber] = useState("");
  const [submitData, setData] = useState("");
  function handleClick() {
    setData(name, randomNumber);
  }

  let upperCaseName = name.toLocaleUpperCase();
  let finalNumber = randomNumber * 10;

  return (
    <>
      <input
        type="text"
        placeholder="Wie heißt du?"
        className="mb-5 w-full border border-gray-300 p-2 bg-gray-50 rounded-md focus:outline-none focus:border-gray-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Gib eine zufällige Zahl ein (Zwischen 1 - 10)"
        className="mb-5 w-full border border-gray-300 p-2 bg-gray-50 rounded-md focus:outline-none focus:border-gray-400"
        min={1}
        max={10}
        value={randomNumber}
        onChange={(e) => setRandomNumber(e.target.value)}
      />

      <button
        type="button"
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Absenden
      </button>

      {submitData && (
        <div className="mt-5">
          <p>Hallo {upperCaseName}.</p>
          <p>
            Deine Zahl ({randomNumber}) x 10 ergibt: {finalNumber}
          </p>
        </div>
      )}
    </>
  );
}
