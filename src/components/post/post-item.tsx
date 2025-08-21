import { useState } from "react";

type Post = { id: number; userId: number; title: string; body: string };

export default function PostItem({ post }: { post: Post }) {
  const [open, setOpen] = useState(false);

  return (
    <article>
      <button
        className="w-full text-left px-4 py-3 hover:bg-gray-50 focus-visible:focus-ring rounded-lg"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <h3 className="font-medium">{post.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-1">{post.body}</p>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-700">
          {post.body}
          {/* Bonus TODO: fetch and render first 2 comments below */}
        </div>
      )}
    </article>
  );
}
