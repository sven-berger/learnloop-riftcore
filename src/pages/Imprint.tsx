import { useState, useEffect } from "react";
import Content from "../components/Content";
import GitHub from "../components/GitHub";
import H2 from "../components/H2";

type Imprint = {
  name: string;
  address: string[];
  mail: string;
  phone: string;
  information: string;
};

export default function Imprint() {
  const [imprint, setImprint] = useState<Imprint[]>([]);

  useEffect(() => {
    async function fetchImprint() {
      const res = await fetch("/json/Imprint.json");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as Imprint[];
      setImprint(json);
    }
    fetchImprint();
  }, []);
  return (
    <>
      <Content>
        <H2>Allgemeine Informationen</H2>
        {imprint.map((item, index) => (
          <dl key={index} className="flex flex-col gap-2">
            <dt className="text-green-700 font-bold my-5">
              Vollständiger Name
            </dt>
            <dd>{item.name}</dd>
            <dt className="text-green-700 font-bold my-5">Adresse</dt>
            <dd>
              {item.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </dd>
            <dt className="text-green-700 font-bold my-5">Telefon</dt>
            <dd>{item.phone}</dd>
            <dt className="text-green-700 font-bold my-5">E-Mail</dt>
            <dd>{item.mail}</dd>
          </dl>
        ))}
      </Content>
      <Content>
        <H2>Weitere Informationen</H2>
        {imprint.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p dangerouslySetInnerHTML={{ __html: item.information }} />
          </div>
        ))}
      </Content>

      <GitHub name="Imprint" type="page" />
    </>
  );
}
