import { useState } from "react";
import Button from "../components/buttons/Button";
import Content from "../components/Content";

type Summary = {
  yourChoice: number;
  randomNumber: number;
  message: string;
};

export default function GuessTheNumber() {
  const [formData, setFormData] = useState({
    yourChoice: "",
    randomNumber: Math.floor(Math.random() * 100) + 1,
    message: "",
  });

  const [summary, setSummary] = useState<Summary | null>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSummary({
      yourChoice: Number(formData.yourChoice),
      randomNumber: Number(formData.randomNumber),
      message: formData.message.trim(),
    });
  };

  return (
    <>
      <>
        <Content>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="mb-3">Deine Zahl</label>
            <input
              type="number"
              className="bg-white w-full p-4 border border-gray-200 rounded-e-2xl mt-3"
              placeholder="Deine Zahl"
              onChange={(e) =>
                setFormData({ ...formData, yourChoice: e.target.value })
              }
            ></input>
            <Button type="submit">Absenden</Button>
          </form>
        </Content>
      </>
      <>
        {summary && (
          <Content>
            <p>Deine Zahl: {formData.yourChoice}</p>
            <p>Zufllige Zahl: {formData.randomNumber}</p>
          </Content>
        )}
      </>
    </>
  );
}
