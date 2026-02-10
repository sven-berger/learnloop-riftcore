import { useState } from "react";
import Button from "../components/buttons/Button";
import Content from "../components/Content";
import H2 from "../components/H2";

type MultiplierType = "2" | "5" | "10" | "ownNumber";

type Result = {
  name: string;
  num: number;
  multiplier: number;
  finalNumber: number;
};

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [randomNumber, setRandomNumber] = useState("");
  const [multiplierType, setMultiplierType] = useState<MultiplierType>("2");
  const [ownMultiplier, setOwnMultiplier] = useState("");

  const [result, setResult] = useState<Result | null>(null);

  const hasAll =
    name.trim() !== "" &&
    randomNumber !== "" &&
    (multiplierType !== "ownNumber" || ownMultiplier !== "");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!hasAll) return;

    const num = Number(randomNumber);
    const multiplier =
      multiplierType === "ownNumber"
        ? Number(ownMultiplier)
        : Number(multiplierType);

    setResult({
      name: name.trim(),
      num,
      multiplier,
      finalNumber: num * multiplier,
    });
  }

  return (
    <>
      <Content>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="bg-white w-full p-4 border-gray-200 rounded-2xl my-5"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Bitte gib deinen Namen ein."
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Zufällige Zahl (Zwischen 1-10)</label>
            <input
              type="number"
              min="1"
              max="10"
              className="bg-white w-full p-4 border-gray-200 rounded-2xl my-5"
              value={randomNumber}
              onChange={(e) => setRandomNumber(e.target.value)}
              placeholder="z.B. 5"
            />
          </div>

          <div>
            <label className="form-label">Multiplikator</label>
            <select
              className="bg-white w-full p-4 border-gray-200 rounded-2xl my-5"
              value={multiplierType}
              onChange={(e) =>
                setMultiplierType(e.target.value as MultiplierType)
              }
            >
              <option value="">Bitte wählen</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="ownNumber">Eigene Zahl</option>
            </select>
          </div>

          {multiplierType === "ownNumber" && (
            <div className="mb-3">
              <input
                type="number"
                className="bg-white w-full p-4 border-gray-200 rounded-2xl my-5"
                placeholder="Gib deine eigene Zahl ein"
                value={ownMultiplier}
                onChange={(e) => setOwnMultiplier(e.target.value)}
              />
            </div>
          )}

          <Button type="submit">Absenden</Button>
        </form>
      </Content>

      {result && (
        <Content>
          <div>
            <H2>Hallo {result.name}, wie geht es dir?</H2>
            <p>
              Deine Zahl (<span className="fw-bold">{result.num}</span>) x{" "}
              <span className="fw-bold">{result.multiplier}</span> ergibt:{" "}
              <span className="fw-bold">{result.finalNumber}</span>
            </p>
          </div>
        </Content>
      )}
    </>
  );
}
