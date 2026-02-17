import Content from "../components/Content";
import GitHub from "../components/GitHub";

export default function EntryPrices() {
  return (
    <>
      <Content>
        <h1 className="text-3xl font-bold mb-5">Eintrittspreise</h1>
        <p>
          Hier findest du die aktuellen Eintrittspreise für den Freizeitpark.
          Bitte beachte, dass die Preise je nach Saison und Alter variieren
          können.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Erwachsene (ab 18 Jahren): 25€</li>
          <li>Kinder (3-17 Jahre): 15€</li>
          <li>Kleinkinder (0-2 Jahre): kostenlos</li>
          <li>Senioren (ab 65 Jahren): 20€</li>
        </ul>
        <p className="mt-4">
          Es gibt auch Familienpakete und Gruppentarife. Für weitere
          Informationen besuche bitte unsere offizielle Website oder kontaktiere
          unseren Kundenservice.
        </p>
      </Content>
      <GitHub name="EntryPrices" type="exercise" />
    </>
  );
}
