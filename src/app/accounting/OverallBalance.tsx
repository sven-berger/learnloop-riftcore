import H2 from "../../components/H2";
import Content from "../../components/Content";

export default function OverallBalance() {
  return (
    <>
      <Content>
        <div>
          <H2>Gesamtbilanz</H2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-3">
            <dt className="text-gray-500">Einnahmen</dt>
            <dd className="font-medium text-gray-500">0,00€</dd>

            <dt className="text-gray-500">Ausgaben</dt>
            <dd className="font-medium text-gray-500">0,00€</dd>
          </dl>
          <hr />
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mt-3">
            <dt className="text-gray-500 font-weight bold">Bilanz #1</dt>
            <dd>
              <span className="rounded-full font-medium bg-green-700 px-3 text-white">
                0,00€
              </span>
            </dd>
            <dt className="text-gray-500 font-weight bold">Bilanz #2</dt>
            <dd>
              <span className="rounded-full font-medium bg-red-700 px-3 text-white">
                0,00€
              </span>
            </dd>
          </dl>
        </div>
      </Content>
    </>
  );
}
