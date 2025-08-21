import { useEffect, useState } from "react";
import { usePosts } from "../../hooks/use-posts";
import type { User } from "../../types";
import PostList from "./post-list";
import { LoadingState } from "../common/loading-state";

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
      {/* Controls */}
      <div className="rounded-xl bg-white p-4   ">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 flex gap-2">
            <label htmlFor="search" className="sr-only">
              Search posts
            </label>
            <input
              id="search"
              className="w-full md:max-w-sm rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:focus-ring"
              placeholder="Search title or body..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="sort" className="sr-only">
              Sort
            </label>
            <select
              id="sort"
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:focus-ring"
              value={order}
              onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
            >
              <option value="asc">Title A → Z</option>
              <option value="desc">Title Z → A</option>
            </select>
          </div>
        </div>
      </div>

      {loading && <LoadingState title="Posts" />}
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error.message}
        </p>
      )}

      <PostList posts={posts} />

      {/* {!loading && posts.length === 0 && !error && (
          <li className="text-sm text-gray-600 px-2 py-4">No posts found.</li>
        )} */}

      {/* Pagination */}
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
