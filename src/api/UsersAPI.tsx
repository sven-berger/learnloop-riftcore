import { useEffect, useState } from "react";

type User = { id: number; name: string };

export default function UsersAPI() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const request = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!request.ok) throw new Error("API Fetch failed");
        const result = await request.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
