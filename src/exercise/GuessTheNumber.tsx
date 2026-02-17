import { useState } from "react";
import Button from "../components/buttons/Button";
import Content from "../components/Content";

type Summary = {
  startNumber: number;
  endNumber: number;
  yourChoice: number;
  randomNumber: number;
  message: string;
};

export default function GuessTheNumber() {
  const [formData, setFormData] = useState({
    yourChoice: "",
    startNumber: "",
    endNumber: "",
    randomNumber: 0,
    message: "",
  });

  const [summary, setSummary] = useState<Summary | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const start = Number(formData.startNumber);
    const end = Number(formData.endNumber);
    if (!Number.isFinite(start) || !Number.isFinite(end) || end < start) return;
    const random = Math.floor(Math.random() * (end - start + 1)) + start;

    setSummary({
      startNumber: start,
      endNumber: end,
      yourChoice: 0,
      randomNumber: random,
      message: "",
    });
    setFormData((prev) => ({ ...prev, yourChoice: "" })); // Ratefeld sauber leermachen
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, yourChoice: value }));

    // Wenn noch kein Spiel gestartet: nix tun
    if (!summary) return;

    // Leeres Feld: keine Bewertung
    if (value.trim() === "") {
      setSummary((prev) => (prev ? { ...prev, message: "" } : prev));
      return;
    }

    const choice = Number(value);

    setSummary((prev) => {
      if (!prev) return prev;

      if (choice < prev.randomNumber) {
        return { ...prev, yourChoice: choice, message: "Höher!" };
      }
      if (choice > prev.randomNumber) {
        return { ...prev, yourChoice: choice, message: "Niedriger!" };
      }
      return { ...prev, yourChoice: choice, message: "Richtig! 🎉" };
    });
  };

  return (
    <>
      {!summary && (
        <Content>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="mb-3">Startzahl</label>
            <input
              type="number"
              className="bg-white w-full p-4 border border-gray-200 rounded-2xl mt-3"
              placeholder="Startzahl (z.B. 1)"
              onChange={(e) =>
                setFormData({ ...formData, startNumber: e.target.value })
              }
            ></input>
            <label className="mb-3">Endzahl</label>
            <input
              type="number"
              className="bg-white w-full p-4 border border-gray-200 rounded-2xl mt-3"
              placeholder="Endzahl (z.B. 100)"
              onChange={(e) =>
                setFormData({ ...formData, endNumber: e.target.value })
              }
            ></input>
            <Button type="submit">Absenden</Button>
          </form>
        </Content>
      )}

      {summary && (
        <>
          {/* <Content>
            <p>Zufällige Zahl: {summary.randomNumber}</p>
          </Content> */}

          <Content>
            {!summary.yourChoice && (
              <>
                <div className="bg-green-700 p-4 border-2 border-green-600 shadow-inner mb-10 rounded-2xl">
                  <p className="text-white text-center">
                    Die Zufallszahl wurde erfolgreich angelegt und liegt
                    zwischen {summary.startNumber} und {summary.endNumber}.
                  </p>
                  <p className="text-white text-center">
                    Viel Erfolg beim Raten! 🎲
                  </p>
                </div>
                <label>Deine Zahl</label>
              </>
            )}

            <form>
              <input
                type="number"
                className="bg-white w-full p-4 border border-gray-200 rounded-2xl mt-3"
                placeholder="Deine Zahl"
                value={formData.yourChoice}
                onChange={handleOnChange}
              />
            </form>
          </Content>

          {summary.message && (
            <Content>
              <p className="mt-4">{summary.message}</p>
            </Content>
          )}
        </>
      )}
    </>
  );
}
