# Posts Explorer Coding Test

Welcome! This project is a React coding test. Please read the instructions below before you begin.

## Project Overview

Posts Explorer is a simple React app built with Vite, TypeScript, and TailwindCSS. It displays a list of users and allows you to view and interact with their posts. The codebase is intentionally incomplete and contains TODOs for you to implement.

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```
2. **Start the development server:**
   ```
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- App.tsx — Main app layout and logic
- components/user-list.tsx — User selection sidebar
- components/posts-panel.tsx — Posts list and controls (contains TODOs)
- components/post-item.tsx — Individual post display (bonus TODO: fetch and render first 2 comments for each post)

## Your Task

Complete the TODOs in posts-panel.tsx:

- Fetch and display posts for the selected user (use https://jsonplaceholder.typicode.com/posts?userId=...)
- Implement loading and error states
- Add a search input to filter posts by title/body
- Add a sort select (Title A→Z / Z→A)
- Implement pagination (10 per page or "Load more")
- Make post items toggle their body on click
- Improve accessibility (labels, roles, focus states)

**Bonus:** In post-item.tsx, fetch and render the first 2 comments for each post.

Feel free to refactor, add components, or improve the UI/UX as you see fit.

## Notes

- You may use any npm packages, but explain your choices if you add new dependencies.
- Write clean, readable, and maintainable code.
- Add comments where helpful.
- You do **not** need to write tests for this exercise.

## Submitting Your Solution

When you're done, commit your changes and push to your repository.

Good luck!
