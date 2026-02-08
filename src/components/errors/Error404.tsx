import Page from "../Page";
import ButtonURL from "../buttons/ButtonURL";

export default function Error404() {
  return (
    <>
      <Page>
        <div className="flex items-center justify-center min-h-screen px-2">
          <div className="text-center">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-2xl font-medium mt-4">
              Oops! Seite nicht gefunden
            </p>
            <p className="mt-4 mb-8">
              Die gesuchte Seite existiert nicht oder wurde verschoben. /
              <br />
              The page you're looking for doesn't exist or has been moved.
            </p>

            <ButtonURL children={undefined} text="Zurück zur Startseite" />
          </div>
        </div>
      </Page>
    </>
  );
}
