import H2 from "../../components/H2";
import Content from "../../components/Content";
import Button from "../../components/buttons/Button";

export default function PostingForm() {
  return (
    <>
      <Content>
        <div>
          <H2>Ein- oder Ausgabe verbuchen</H2>
          <form className="grid w-full grid-cols-[2fr_1fr_1fr] gap-y-5 items-stretch">
            <label className="flex items-stretch grow">
              <span className="flex items-center border-gray-400 border-l border-t border-b px-3 rounded-l-lg">
                Titel
              </span>
              <input
                type="text"
                className="grow border-gray-400 border-t border-b h-12 px-3 outline-none"
                placeholder='z.B. "Einkaufen"'
              />
            </label>

            <label className="option">
              <input type="radio" name="type" value="income" />
              <span className="income flex items-center h-12 px-3  border border-green-700">
                Einnahme
              </span>
            </label>

            <label className="option">
              <input type="radio" name="type" value="expense" />
              <span className="expense flex items-center h-12 px-3  border border-red-700 rounded-r-lg">
                Ausgabe
              </span>
            </label>

            <label className="flex items-stretch grow">
              <span className="flex items-center border-gray-400 border-l border-t border-b px-3 rounded-l-lg">
                Betrag
              </span>
              <input
                type="text"
                className="grow border-gray-400 border-t border-b h-12 px-3 outline-none"
                placeholder="z.B. 10,42"
              />
            </label>
            <label className="flex items-stretch col-span-2">
              <span className="flex items-center border-gray-400 border-t border-b px-3">
                Datum
              </span>
              <input
                type="date"
                className="grow border-gray-400 border-t border-b border-r h-12 px-3 outline-none rounded-r-lg"
              />
            </label>
            <div className="flex">
              <Button children={undefined} text="Hinzufügen" />"
            </div>
          </form>
        </div>
      </Content>
    </>
  );
}
