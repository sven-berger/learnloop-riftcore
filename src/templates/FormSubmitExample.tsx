import { useState } from "react";
import Button from "../components/buttons/Button";
import Content from "../components/Content";
import H2 from "../components/H2";

type Summary = {
  finalNumber: number | undefined;
  name: string;
  age: number;
  about: string;
  ownColor?: string;
  favoriteColor: string;
  yourNumber?: number;
};

const favoriteColorMap = {
  blue: "Blau",
  red: "Rot",
  green: "Grün",
};

export default function FormSubmitExample() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    about: "",
    favoriteColor: "",
    ownColor: "",
    yourNumber: 0,
    finalNumber: 0,
  });
  const [summary, setSummary] = useState<Summary | null>(null);

  // Abgeleiteter State: Verhindert unnötige Variablen
  const isComplete =
    formData.name.trim() &&
    formData.age &&
    formData.about.trim() &&
    formData.favoriteColor &&
    (formData.favoriteColor === "ownColor" ? formData.ownColor.trim() : true) &&
    formData.yourNumber > 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isComplete) return;

    setSummary({
      name: formData.name.trim(),
      age: Number(formData.age),
      about: formData.about.trim(),
      ownColor: formData.ownColor || undefined,
      favoriteColor:
        formData.favoriteColor === "ownColor" && formData.ownColor
          ? formData.ownColor
          : favoriteColorMap[
              formData.favoriteColor as keyof typeof favoriteColorMap
            ] || formData.favoriteColor,
      yourNumber: formData.yourNumber || undefined,
      finalNumber: formData.yourNumber ? formData.yourNumber * 10 : undefined,
    });
  };

  return (
    <>
      <Content>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-3">Name:</label>
            <input
              type="text"
              className="bg-white w-full p-4 border border-gray-200 rounded-2xl mt-3"
              placeholder="Dein Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="mb-3">Alter:</label>
            <input
              type="number"
              className="bg-white w-full p-4 border border-gray-200 rounded-2xl mt-3"
              placeholder="Dein Alter"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
          </div>

          <div>
            <label className="mb-3">Erzähl mir etwas über dich..</label>
            <textarea
              className="bg-white w-full p-4 border border-gray-200 rounded-2xl mt-3"
              value={formData.about}
              onChange={(e) =>
                setFormData({ ...formData, about: e.target.value })
              }
              placeholder="Ich bin..."
            />
          </div>

          <div>
            <label className="mb-3">Was ist deine Lieblingsfarbe?</label>
            <select
              className="bg-white w-full p-4 border border-gray-200 rounded-2xl mt-3"
              value={formData.favoriteColor}
              onChange={(e) =>
                setFormData({ ...formData, favoriteColor: e.target.value })
              }
            >
              <option value="red">Rot</option>
              <option value="blue">Blau</option>
              <option value="green">Grün</option>
              <option value="ownColor">Andere Farbe</option>
            </select>
            {formData.favoriteColor === "ownColor" && (
              <input
                type="text"
                className="bg-white w-full p-4 border border-gray-200 rounded-2xl mt-3"
                placeholder="Deine eigene Lieblingsfarbe"
                value={formData.ownColor || ""}
                onChange={(e) =>
                  setFormData({ ...formData, ownColor: e.target.value })
                }
              />
            )}
          </div>

          <div>
            <label className="mb-3">Wähle eine Zahl zwischen 1 und 100</label>
            <input
              type="range"
              className="bg-white w-full p-4 border border-gray-200 rounded-2xl mt-3"
              placeholder="Zahl zwischen 1 und 100"
              min="1"
              max="100"
              value={formData.yourNumber}
              onChange={(e) =>
                setFormData({ ...formData, yourNumber: Number(e.target.value) })
              }
            />
            <small className="text-gray-500">
              Deine Zahl: {formData.yourNumber || 0}
            </small>
          </div>

          <Button type="submit">Absenden</Button>
        </form>
      </Content>

      {summary && (
        <>
          <Content>
            <p>
              Hallo {summary.name}, du bist {summary.age} Jahre alt.
            </p>
            <p>Deine Lieblingsfarbe ist: {summary.favoriteColor}.</p>
          </Content>
          <Content>
            <H2>Das erzählst du also über dich:</H2>
            <p className="mt-2 italic">"{summary.about}"</p>
          </Content>
          <Content>
            <p className="mt-2">Deine Zahl: {summary.yourNumber}</p>
            <p className="mt-2">
              Deine Zahl multipliziert mit 10: {summary.finalNumber}
            </p>
          </Content>
        </>
      )}
    </>
  );
}
