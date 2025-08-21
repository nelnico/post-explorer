import { useEffect, useState } from "react";
import { usePosts } from "../../hooks/use-posts";
import type { User } from "../../types";
import PostList from "./post-list";
import { LoadingState } from "../common/loading-state";
import PostSearch from "./post-search";
import ErrorState from "../common/error-state";

interface PostsPanelProps {
  user: User;
}

const PAGE_SIZE = 3;

export default function PostsPanel({ user }: PostsPanelProps) {
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    setSkip(0);
  }, [query, order]);

  useEffect(() => {
    setQuery("");
    setSkip(0);
  }, [user]);

  const { posts, loading, error } = usePosts({
    userId: user.id,
    skip,
    take: PAGE_SIZE,
    order,
    query: query.trim() || undefined,
  });

  return (
    <section
      aria-live="polite"
      aria-busy={loading || undefined}
      className="relative flex h-full flex-col space-y-3  "
    >
      <PostSearch
        query={query}
        order={order}
        onQueryChange={setQuery}
        onOrderChange={setOrder}
      />

      {loading && <LoadingState title="Posts" />}
      {error && <ErrorState title={error.message} />}
      {!loading && <PostList posts={posts} />}

      <nav
        aria-label="Pagination"
        className="mt-auto flex items-center justify-center gap-2"
      >
        <button
          onClick={() => setSkip((s) => Math.max(0, s - PAGE_SIZE))}
          disabled={loading || skip === 0}
          className="px-3 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50 focus-visible:focus-ring"
        >
          Prev
        </button>
        <button
          onClick={() => setSkip((s) => s + PAGE_SIZE)}
          disabled={loading || posts.length < PAGE_SIZE}
          className="px-3 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50 focus-visible:focus-ring"
        >
          Next
        </button>
      </nav>

      {/* Centered loading overlay (keeps current list visible underneath) */}
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white/60"
          role="status"
        >
          <div className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 shadow-sm">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="opacity-25"
              />
              <path
                d="M22 12a10 10 0 00-10-10"
                stroke="currentColor"
                strokeWidth="4"
                className="opacity-75"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-sm text-gray-700">Loading…</span>
          </div>
        </div>
      )}
    </section>
  );
}
