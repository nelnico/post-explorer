import PostItem from "./post-item";

/**
 * TODOs:
 * - Fetch posts for userId with loading/error states.
 * - Search input (filters title/body).
 * - Sort select (Title A→Z / Z→A).
 * - Pagination: 10 per page OR "Load more".
 * - Click post item to toggle body.
 * - A11y: labels, roles, focus states.
 */
export default function PostsPanel() {
  return (
    <section aria-live="polite" className="space-y-3">
      {/* Controls */}
      <div className="rounded-xl bg-white p-4 border border-gray-200">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 flex gap-2">
            {/* Search input */}
            <label htmlFor="search" className="sr-only">
              Search posts
            </label>
            <input
              id="search"
              className="w-full md:max-w-sm rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
                         placeholder:text-gray-400 focus-visible:focus-ring"
              placeholder="Search title or body..."
            />
          </div>
          <div className="flex gap-2">
            {/* Sort select */}
            <label htmlFor="sort" className="sr-only">
              Sort
            </label>
            <select
              id="sort"
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:focus-ring"
            >
              <option value="asc">Title A → Z</option>
              <option value="desc">Title Z → A</option>
            </select>
          </div>
        </div>
      </div>

      {/* List */}
      <ul className="space-y-2">
        <li className="rounded-lg bg-white border border-gray-200">
          <PostItem
            post={{
              id: 1,
              userId: 1,
              title: "Sample Post",
              body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit.",
            }}
          />
        </li>
      </ul>

      {/* Load more */}
      <nav
        aria-label="Pagination"
        className="flex items-center justify-center gap-2"
      >
        <button className="px-3 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50 focus-visible:focus-ring">
          Load More
        </button>
      </nav>
    </section>
  );
}
