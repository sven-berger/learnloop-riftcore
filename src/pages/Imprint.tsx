import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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

type ImprintApi = {
  name: string;
  address?: string[] | string;
  adress?: string[] | string;
  mail: string;
  phone: string;
  information: string;
};

export default function Imprint() {
  const { t } = useTranslation();
  const [imprint, setImprint] = useState<Imprint[]>([]);

  useEffect(() => {
    async function fetchImprint() {
      const res = await fetch("/json/Imprint.json");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as ImprintApi[];
      const normalized = json.map((item) => {
        const rawAddress = item.address ?? item.adress ?? [];
        const address = Array.isArray(rawAddress) ? rawAddress : [rawAddress];

        return {
          name: item.name,
          address,
          mail: item.mail,
          phone: item.phone,
          information: item.information,
        } satisfies Imprint;
      });
      setImprint(normalized);
    }
    fetchImprint();
  }, []);
  return (
    <>
      <Content>
        <H2>{t("imprint.generalInformation")}</H2>
        {imprint.map((item, index) => (
          <dl key={index} className="flex flex-col gap-2">
            <dt className="text-green-700 font-bold my-5">
              {t("imprint.fullName")}
            </dt>
            <dd>{item.name}</dd>
            <dt className="text-green-700 font-bold my-5">
              {t("imprint.address")}
            </dt>
            <dd>
              {item.address.map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))}
            </dd>
            <dt className="text-green-700 font-bold my-5">
              {t("imprint.phone")}
            </dt>
            <dd>{item.phone}</dd>
            <dt className="text-green-700 font-bold my-5">
              {t("imprint.email")}
            </dt>
            <dd>{item.mail}</dd>
          </dl>
        ))}
      </Content>
      <Content>
        <H2>{t("imprint.moreInformation")}</H2>
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
