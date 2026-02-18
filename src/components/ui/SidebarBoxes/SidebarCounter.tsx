import { useState } from "react";
import Button from "../../buttons/Button";
import Box from "../../Box";
import H2 from "../../H2";

export default function SidebarCounter() {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount((prev: number) => {
      return prev + 1;
    });
  };

  const decreaseHandler = () => {
    setCount((prev: number) => {
      return prev - 1;
    });
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <Box>
      <H2 style="mb-10 mt-6">Counter</H2>
      <div className="bg-white rounded-2xl border-gray-200 flex items-center justify-center text-center mb-10 text-gray-600 p-4">
        {count}
      </div>

      <Button
        text="Erhöhen"
        style="bg-green-600 w-full mb-5"
        onClick={increaseHandler}
      ></Button>

      <Button
        text="Verringern"
        style="bg-yellow-400 w-full mb-5"
        onClick={decreaseHandler}
      ></Button>

      <Button
        text="Zurücksetzen"
        style="bg-red-500 w-full mb-5"
        onClick={resetHandler}
      ></Button>
    </Box>
  );
}
