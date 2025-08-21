import { useState } from "react";
import UserList from "./components/user-list";
import PostsPanel from "./components/post/posts-panel";
import type { User } from "./types";
import { EmptyState } from "./components/common/empty-state";
import Header from "./components/common/header";

export default function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-gray-50">
      <UserList selectedUser={selectedUser} onSelectUser={setSelectedUser} />

      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <Header />

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
