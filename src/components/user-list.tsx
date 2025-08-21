import { useEffect, useState } from "react";

type User = { id: number; name: string };

export default function UserList({
  onSelectUser,
  selectedUserId,
}: {
  onSelectUser: (id: number) => void;
  selectedUserId: number | null;
}) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!result.ok) throw new Error("Failed to load users");
        setUsers(await result.json());
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <aside className="border-b md:border-b-0 md:border-r border-gray-200 p-4 bg-white">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-3">
        Users
      </h2>
      {loading && <p className="text-sm text-gray-500">Loading users...</p>}
      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
      <ul className="space-y-1">
        {users.map((u) => {
          const active = selectedUserId === u.id;
          return (
            <li key={u.id}>
              <button
                onClick={() => onSelectUser(u.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition
                  ${
                    active ? "bg-indigo-50 text-indigo-700" : "hover:bg-gray-50"
                  }
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
              >
                {u.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
