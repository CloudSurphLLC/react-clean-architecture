import useSWR from "swr";

export function useBlogPosts() {
  return useSWR("/blog/posts", async () => {
    const res = await fetch("/blog/posts");
    return res.json();
  });
}
