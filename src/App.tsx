import { useState } from "react";
import UserList from "./components/user-list";
import PostsPanel from "./components/posts-panel";
import type { User } from "./types";
import { EmptyState } from "./components/common/empty-state";

export default function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-gray-50">
      <UserList selectedUser={selectedUser} onSelectUser={setSelectedUser} />

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

          {selectedUser ? (
            <PostsPanel user={selectedUser} />
          ) : (
            <EmptyState
              title="No user selected."
              description="Choose a user from the left to get started."
            />
          )}
        </div>
      </main>
    </div>
  );
}
