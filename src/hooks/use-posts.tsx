import { useEffect, useState } from "react";
import type { Post } from "../types";

interface UsePostsOptions {
  userId: number;
  skip?: number;
  take?: number;
  order?: "asc" | "desc";
  query?: string;
}

export function usePosts({
  userId,
  skip = 0,
  take = 10,
  order,
  query,
}: UsePostsOptions) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) return;

    const params = new URLSearchParams();
    params.set("userId", String(userId));
    params.set("_start", String(skip));
    params.set("_limit", String(take));

    if (order) {
      params.set("_sort", "title");
      params.set("_order", order);
    }

    if (query) {
      params.set("q", query);
    }

    const url = `${import.meta.env.VITE_API_URL}/posts?${params.toString()}`;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data: Post[]) => setPosts(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [userId, skip, take, order, query]);

  return { posts, loading, error };
}
