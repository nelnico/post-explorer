export type PostOrder = "asc" | "desc";

interface PostSearchProps {
  query: string;
  order: PostOrder;
  onQueryChange: (value: string) => void;
  onOrderChange: (value: PostOrder) => void;
}

export default function PostSearch({
  query,
  order,
  onQueryChange,
  onOrderChange,
}: PostSearchProps) {
  return (
    <div className="rounded-xl p-4 border">
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
            onChange={(e) => onQueryChange(e.target.value)}
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
            onChange={(e) => onOrderChange(e.target.value as PostOrder)}
          >
            <option value="asc">Title A → Z</option>
            <option value="desc">Title Z → A</option>
          </select>
        </div>
      </div>
    </div>
  );
}
