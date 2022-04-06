import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "./App";

function Page({ index }: { index: number }) {
  const { data = [] } = useSWR(
    `http://localhost:3003/posts?_page=${index}&_limit=5`,
    fetcher
  );

  return (
    <div>
      {data.map((item: iPost) => (
        <li>{item.title}</li>
      ))}
    </div>
  );
}

export const SWRLoadAsPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Page index={page} />
      {/* Preloading next page */}
      <div style={{ display: "none" }}>
        <Page index={page + 1} />
      </div>
      <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export const SWRLoad = () => {
  const [page, setPage] = useState(1);
  const { data = [] } = useSWR(
    `http://localhost:3003/posts?_page=${page}&_limit=5`,
    fetcher
  );
  return (
    <div>
      {data.map((item: iPost) => (
        <li>{item.title}</li>
      ))}
      <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
