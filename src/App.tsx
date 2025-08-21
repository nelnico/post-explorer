import { useState } from "react";
import UserList from "./components/user-list";
import PostsPanel from "./components/posts-panel";

export default function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-gray-50">
      <UserList
        selectedUserId={selectedUserId}
        onSelectUser={setSelectedUserId}
      />

      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-4">
            <h1 className="text-2xl font-semibold tracking-tight">
              Posts Explorer
            </h1>
            <p className="text-sm text-gray-600">
              Select a user from the left to view their posts.
            </p>
          </header>

          {selectedUserId ? <PostsPanel /> : <EmptyState />}
        </div>
      </main>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
      <p>No user selected.</p>
      <p className="text-sm mt-1">
        Choose a user from the left to get started.
      </p>
    </div>
  );
}
