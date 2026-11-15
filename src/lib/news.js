// src/lib/news.js
// Podział aktualności na strony: /aktualnosci/ (strona 1), /aktualnosci/strona/2/, /aktualnosci/strona/3/...

export const POSTS_PER_PAGE = 12;

export function newsPageHref(page) {
  return page === 1 ? '/aktualnosci/' : `/aktualnosci/strona/${page}/`;
}

// Wpisy z danej strony (numerowanej od 1) i liczba wszystkich stron.
export function paginatePosts(posts, page) {
  const total = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const start = (page - 1) * POSTS_PER_PAGE;
  return { posts: posts.slice(start, start + POSTS_PER_PAGE), total };
}
