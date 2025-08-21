# JSONPlaceholder API Usage Guide

This project uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to fetch user and post data. Below are instructions and examples for using the API endpoints relevant to this coding test.

## Base URL

```
https://jsonplaceholder.typicode.com
```

## Fetching Posts

To fetch posts, use the `/posts` endpoint. You can filter and sort results using query parameters:

### Common Query Parameters

- `userId` — Filter posts by user ID
- `q` — Search for posts containing a string in the title or body
- `_sort` — Sort results by a field (e.g., `title`)
- `_order` — Sort order (`asc` or `desc`)

### Example Request

Fetch posts for user ID 1, search for posts containing "nost", sort by title descending:

```
GET https://jsonplaceholder.typicode.com/posts?q=nost&_sort=title&_order=desc&userId=1
```

### Example Response

```json
[
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe..."
  }
  // ...more posts
]
```

## Fetching Users

To fetch all users:

```
GET https://jsonplaceholder.typicode.com/users
```

## Pagination

JSONPlaceholder supports pagination using the `_start` and `_limit` query parameters:

- `_start` — The index of the first item to return (0-based)
- `_limit` — The maximum number of items to return

### Example Request

Fetch posts 0–4 (first 5 posts):

```
GET https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5
```

### Example Response

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit..."
  }
  // ...4 more posts
]
```

## Notes

- All endpoints return JSON.
- The API is public and does not require authentication.
- For more details, see [JSONPlaceholder documentation](https://jsonplaceholder.typicode.com/guide/).
