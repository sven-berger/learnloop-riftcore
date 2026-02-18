import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../style/PrivacyPolicy.css";

import Content from "../components/Content";
import GitHub from "../components/GitHub";
import DOMPurify from "dompurify";
import H2 from "../components/H2";

type PrivacyPolicy = {
  information: string;
  responsibleAdmin: string;
  usedScriptsLibarys: string;
  integrationExternalInterfaces: string;
  cookiesSessionsTracking: string;
  contact: string;
  userRights: string;
};

export default function PrivacyPolicy() {
  // Aus /public/json/PrivacyPolicy.json fetchen mit useEffect und in state speichern. Dann in Content anzeigen. Es gibt nur einen Eintrag, also einfach direkt den ersten Eintrag anzeigen.
  const { t } = useTranslation();
  const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicy>({
    responsibleAdmin: "",
    information: "",
    usedScriptsLibarys: "",
    integrationExternalInterfaces: "",
    cookiesSessionsTracking: "",
    contact: "",
    userRights: "",
  });

  useEffect(() => {
    async function fetchPrivacyPolicy() {
      const res = await fetch("/json/PrivacyPolicy.json");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as PrivacyPolicy[];
      setPrivacyPolicy(json[0]);
    }

    fetchPrivacyPolicy();
  }, []);

  return (
    <>
      <Content>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(privacyPolicy.information),
          }}
        ></p>
      </Content>
      <Content>
        <H2>{t("PrivacyPolicy.responsibleParty")}</H2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(privacyPolicy.responsibleAdmin),
          }}
        />
      </Content>
      <Content>
        <H2>{t("PrivacyPolicy.scriptsAndLibrariesUsed")}</H2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(privacyPolicy.usedScriptsLibarys),
          }}
        />
      </Content>
      <Content>
        <H2>{t("PrivacyPolicy.integrationExternalInterfaces")}</H2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              privacyPolicy.integrationExternalInterfaces,
            ),
          }}
        />
      </Content>
      <Content>
        <H2>{t("PrivacyPolicy.cookiesSessionsTracking")}</H2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(privacyPolicy.cookiesSessionsTracking),
          }}
        />
      </Content>
      <Content>
        <H2>{t("PrivacyPolicy.contact")}</H2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(privacyPolicy.contact),
          }}
        />
      </Content>
      <Content>
        <H2>{t("PrivacyPolicy.userRights")}</H2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(privacyPolicy.userRights),
          }}
        />
      </Content>
      <GitHub name="PrivacyPolicy" type="page" />
    </>
  );
}
