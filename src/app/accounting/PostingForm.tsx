import H2 from "../../components/H2";
import Content from "../../components/Content";
import Button from "../../components/buttons/Button";
import { useState } from "react";

export default function PostingForm() {
  type Summary = {
    title: string;
    type: string;
    amount: number;
    date: string;
  };

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    amount: "",
    date: "",
  });

  const [summary, setSummary] = useState<Summary | null>(null);

  const isComplete =
    formData.title !== "" &&
    formData.type !== "" &&
    formData.amount !== "" &&
    formData.date !== "";

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isComplete) return;

    setSummary({
      title: formData.title.trim(),
      type: formData.type.trim(),
      amount: Number(formData.amount),
      date: formData.date.trim(),
    });
  };

  return (
    <>
      <Content>
        <div>
          <H2>Ein- oder Ausgabe verbuchen</H2>
          <form
            className="grid w-full grid-cols-[2fr_1fr_1fr] gap-y-5 items-stretch"
            onSubmit={handleSubmit}
          >
            <label className="flex items-stretch grow">
              <span className="flex items-center border-gray-400 border-l border-t border-b px-3 rounded-l-lg">
                Titel
              </span>
              <input
                type="text"
                className="grow border-gray-400 border-t border-b h-12 px-3 outline-none"
                placeholder='z.B. "Einkaufen"'
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </label>

            <label className="option">
              <input
                type="radio"
                name="type"
                value="income"
                checked={formData.type === "income"}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              />
              <span className="income flex items-center h-12 px-3  border border-green-700">
                Einnahme
              </span>
            </label>

            <label className="option">
              <input
                type="radio"
                name="type"
                value="expense"
                checked={formData.type === "expense"}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              />
              <span className="expense flex items-center h-12 px-3  border border-red-700 rounded-r-lg">
                Ausgabe
              </span>
            </label>

            <label className="flex items-stretch grow">
              <span className="flex items-center border-gray-400 border-l border-t border-b px-3 rounded-l-lg">
                Betrag
              </span>
              <input
                type="text"
                className="grow border-gray-400 border-t border-b h-12 px-3 outline-none"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                placeholder="z.B. 10,42"
              />
            </label>
            <label className="flex items-stretch col-span-2">
              <span className="flex items-center border-gray-400 border-t border-b px-3">
                Datum
              </span>
              <input
                type="date"
                className="grow border-gray-400 border-t border-b border-r h-12 px-3 outline-none rounded-r-lg"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </label>
            <div className="flex">
              <Button children={undefined} text="Hinzufügen" />
            </div>
          </form>
        </div>
      </Content>

      {summary && (
        <div className="block">
          <Content>
            <H2>Zusammenfassung</H2>
            <p>
              {summary.title} ({summary.type}) - {summary.amount}€ am{" "}
              {summary.date}
            </p>
          </Content>
        </div>
      )}
    </>
  );
}
