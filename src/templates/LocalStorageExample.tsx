"use client";

import { useState } from "react";
import Button from "../components/buttons/Button";
import Content from "../components/Content";
import GitHub from "../components/GitHub";

type Summary = { number: number };

export default function LocalStorageExample() {
  const [formData, setFormData] = useState({ number: 0 });

  const [summary, setSummary] = useState<Summary | null>(() => {
    // wichtig: try/catch, falls Storage blockiert ist (Privacy Mode etc.)
    try {
      const stored = localStorage.getItem("number");
      return stored !== null ? { number: Number(stored) } : null;
    } catch {
      return null;
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSummary = { number: Number(formData.number) };
    setSummary(newSummary);

    try {
      localStorage.setItem("number", String(newSummary.number));
    } catch {
      // ignore
    }
  };

  const handleClear = () => {
    setSummary(null);
    try {
      localStorage.removeItem("number");
    } catch {
      // ignore
    }
  };

  return (
    <>
      <Content>
        <form onSubmit={handleSubmit}>
          <label className="mb-3 block">
            Zahl
            <input
              type="number"
              className="bg-white w-full p-4 border-gray-200 rounded-2xl my-5"
              value={formData.number}
              onChange={(e) => setFormData({ number: Number(e.target.value) })}
            />
            <Button children={undefined} type="submit" text="Absenden" />
          </label>
        </form>
      </Content>

      <Content>
        <Button
          children={undefined}
          type="button"
          text="LocalStorage löschen"
          style="bg-red-700"
          onClick={handleClear}
        />
      </Content>

      {summary && (
        <Content>
          <p>{summary.number}</p>
        </Content>
      )}
      <GitHub name="LocalStorageExample" type="templates" />
    </>
  );
}
