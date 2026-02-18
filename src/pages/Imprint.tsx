import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Content from "../components/Content";
import GitHub from "../components/GitHub";
import H2 from "../components/H2";
import DOMPurify from "dompurify";

type Imprint = {
  name: string;
  adress?: string[] | string;
  email: string;
  phone: string;
  information: string;
};

export default function Imprint() {
  const { t } = useTranslation();
  const [imprint, setImprint] = useState<Imprint[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/json/Imprint.json");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as Imprint[];
      setImprint(json);
    }

    fetchUsers();
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
              {Array.isArray(item.adress) ? (
                item.adress.map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))
              ) : (
                <p> {item.adress}</p>
              )}
            </dd>
            <dt className="text-green-700 font-bold my-5">
              {t("imprint.phone")}
            </dt>
            <dd>{item.phone}</dd>
            <dt className="text-green-700 font-bold my-5">
              {t("imprint.email")}
            </dt>
            <dd>{item.email}</dd>
          </dl>
        ))}
      </Content>
      <Content>
        <H2>{t("imprint.moreInformation")}</H2>
        {/* {imprint.map((item, index) => {
          const sanitizedInfo = item.information
            .replace(/<h2>(.*?)<\/h2>/g, "<h2>$1</h2>")
            .replace(/<p>(.*?)<\/p>/g, "<p>$1</p>")
            .replace(/<br\s*\/?>/g, "<br />");
          return (
            <div
              key={index}
              className="flex flex-col gap-2"
              dangerouslySetInnerHTML={{ __html: sanitizedInfo }}
            />
          );
        })} */}
        <div>
          {imprint.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.information),
                }}
              />
            </div>
          ))}
        </div>
      </Content>

      <GitHub name="Imprint" type="page" />
    </>
  );
}
