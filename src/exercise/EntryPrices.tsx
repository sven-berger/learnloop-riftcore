import { useEffect, useState } from "react";
import Content from "../components/Content";
import GitHub from "../components/GitHub";

type Summary = {
  id: number;
  alterVon: number;
  alterBis: number;
  preis: number;
};

export default function EntryPrices() {
  const [summary, setSummary] = useState<Summary[]>([]);

  useEffect(() => {
    async function fetchSummary() {
      const res = await fetch("/json/Eintrittspreise.json");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as Summary[];
      setSummary(json);
    }
    fetchSummary();
  }, []);
  return (
    <>
      <Content>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-4 border-b">Alter von</th>
              <th className="p-4 border-b">Alter bis</th>
              <th className="p-4 border-b">Preis</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((entry) => (
              <tr key={entry.id}>
                <td className="pt-10 pb-4 pl-4 pr-4">{entry.alterVon}</td>
                <td className="pt-10 pb-4 pl-4 pr-4">{entry.alterBis}</td>
                <td className="pt-10 pb-4 pl-4 pr-4">{entry.preis} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      <GitHub name="EntryPrices" type="exercise" />
    </>
  );
}
