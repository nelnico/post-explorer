import type { Post } from "../../types";
import PostItem from "./post-item";

interface PostList {
  posts: Post[];
}
const PostList = ({ posts }: PostList) => {
  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <li
          key={post.id}
          className="rounded-lg bg-white border border-gray-200"
        >
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
