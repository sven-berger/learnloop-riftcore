import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function TestAPI() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as User[];
      setUsers(json);
    }

    fetchUsers();
  }, []);

  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  );
}
