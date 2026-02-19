import { useEffect, useState } from "react";
import Content from "../../components/Content";
import GitHub from "../../components/GitHub";

type User = {
  id: number;
  name: string;
};

export default function APIExercise() {
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
    <>
      <Content>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-3">
          <dt className="text-gray-500">API:</dt>
          <dd className="font-medium text-gray-500 break-all">
            https://jsonplaceholder.typicode.com/users
          </dd>
        </dl>
        <ol className="list-decimal list-inside mt-10">
          {users.map((user) => (
            <li key={user.id} className="my-5">
              {user.name}
            </li>
          ))}
        </ol>
      </Content>
      <GitHub name="APIExercise" type="templates" />
    </>
  );
}
