import { useInfiniteQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "infiniteCharacters",
    async ({ pageParam = 1 }) =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageParam}`
      ).then((result) => result.json())
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
