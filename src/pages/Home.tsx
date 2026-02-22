import Content from "../components/Content";
import Card from "../components/Card";
import GridLayout from "../components/layout/GridLayout";
import H2 from "../components/H2";
import Button from "../components/buttons/Button";
import GitHub from "../components/GitHub";

export default function Home() {
  return (
    <>
      <Content>
        <div className="block">
          <H2>
            Ein persönlicher Entwicklungsschritt geht vorbei | Zeit für das
            Danke, die Reflexion und den Ausblick
          </H2>
        </div>
        <p>
          Diese Seite ist als React-Projekt entstanden. Über 6 Monate habe ich
          intensiv daran gearbeitet, geflucht, gelacht, gelernt und mich
          weiterentwickelt.
        </p>
        <p>
          Ich wollte moderne Frontend-Entwicklung verstehen – Komponenten,
          State-Management, das virtuelle DOM und die Denkweise hinter
          Single-Page-Anwendungen.
          <br />
          Es war mir wichtig, nicht nur klassische serverseitige Entwicklung zu
          kennen, sondern auch aktuelle Technologien praktisch zu erproben.
        </p>
        <p className="mt-5">
          Diese Zeit war wertvoll. Ich habe viel gelernt – über Struktur,
          Wiederverwendbarkeit und darüber, wie sich Frontend-Architekturen in
          den letzten Jahren verändert haben.
        </p>
        <p>
          Doch während ich tiefer eingestiegen bin, habe ich gemerkt, wo meine
          eigentliche Stärke und Motivation liegen: im Backend.
        </p>
        <p className="mt-5">
          Mich fasziniert es, Datenbanken zu entwerfen, Modelle sauber
          aufzubauen, Geschäftslogik zu entwickeln und Anwendungen strukturell
          durchdacht zu planen.
          <br />
          Für mich fühlt sich dort die eigentliche Softwareentwicklung an – im
          Fundament einer Anwendung, nicht nur in ihrer Oberfläche.
        </p>
        <p className="mt-5">
          Deshalb liegt mein aktueller Schwerpunkt bewusst auf PHP und
          insbesondere auf Laravel. Dieses Framework ermöglicht es mir, genau
          die Art von Anwendungen zu entwickeln, die meinem Denken entsprechen:
          klar strukturiert, datengetrieben und nachhaltig aufgebaut.
        </p>
        <p className="mt-5">
          Die React-Seite bleibt weiterhin Teil meines Portfolios – Eben weil
          sie einen wichtigen Abschnitt meines Lernwegs dokumentiert und weil
          sie meine Bereitschaft widerspiegelt, mich mit modernen Technologien
          auseinanderzusetzen.
          <br />
          Es ist mir wichtig zu betonen, dass ich trotz Fokus auf PHP/Laravel,
          React nicht aus den Augen verlieren werde - Ebenso wenig diese Seite.
          <br />
          Natürlich werde ich weiterhin an dieser Seite arbeiten, sie
          verbessern, aktualisieren und weiterentwickeln. Sie ist ein Teil von
          mir und meiner Reise als Entwickler, aber mein Hauptfokus liegt jetzt
          auf dem Backend.
        </p>

        <p className="mt-10">
          Mit Stolz verweise ich heute zusätzlich auf mein aktuelles
          Hauptprojekt:
        </p>
        <p className="mt-5">
          👉{" "}
          <a
            href="https://laravel.riftcore.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://laravel.riftcore.de
          </a>
        </p>
        <p className="mt-3">
          Für diese Plattform habe ich bewusst einen eigenen vServer
          eingerichtet, um Architektur, Datenbank und Deployment vollständig
          selbst zu steuern.
          <br />
          Dort entwickle ich derzeit mit voller Überzeugung weiter.
        </p>
        <p className="mt-5">
          Technologien sind für mich Werkzeuge – und meine Entwicklung als
          Entwickler ist ein Prozess.
          <br />
          React war ein wichtiger Teil davon.
          <br />
          Laravel ist aktuell mein Fokus.
        </p>
        <p className="mt-5">Und genau so fühlt es sich richtig an.</p>
      </Content>
      <H2 style="mt-10 mb-8">Meine aktuellen Kenntnisse</H2>
      <GridLayout cols={4}>
        <div>
          <Card image="/images/javascript.webp" title="JavaScript">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            <div className="mt-10 flex justify-end">
              <Button
                to="/about/knowledge/#javascript"
                style="bg-amber-400 text-black"
                text="Mehr erfahren"
              ></Button>
            </div>
          </Card>
        </div>
        <div>
          <Card image="/images/react.webp" title="React">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            <div className="mt-10 flex justify-end">
              <Button
                to="/about/knowledge/#react"
                style="bg-sky-400"
                text="Mehr erfahren"
              ></Button>
            </div>
          </Card>
        </div>
        <div>
          <Card image="/images/html-css.webp" title="Tailwind">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            <div className="mt-10 flex justify-end">
              <Button
                to="/about/knowledge/#tailwind"
                style="bg-blue-500"
                text="Mehr erfahren"
              ></Button>
            </div>
          </Card>
        </div>
        <div>
          <Card image="/images/php.webp" title="PHP">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            <div className="mt-10 flex justify-end">
              <Button
                to="/about/knowledge/#php"
                style="bg-indigo-500"
                text="Mehr erfahren"
              ></Button>
            </div>
          </Card>
        </div>
      </GridLayout>
      <GitHub name="Home" type="page" />
    </>
  );
}
