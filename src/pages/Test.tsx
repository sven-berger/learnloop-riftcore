export default function Test() {
  const letter1 = 2;
  const letter2 = 40;
  let result = null;

  function multiply(letter1: number, letter2: number) {
    result = letter1 * letter2;
    return result;
  }

  multiply(letter1, letter2);
  return (
    <div className="min-h-full flex-7 rounded-2xl border border-gray-300 bg-slate-200 p-8">
      <p>{result}</p>
    </div>
  );
}
