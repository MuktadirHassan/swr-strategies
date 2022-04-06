import React from "react";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "./App";

const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end

  return `http://localhost:3003/posts?_page=${pageIndex + 1}&_limit=5`;
};

const SWRInfnite = () => {
  const {
    data = [],
    size,
    setSize,
  } = useSWRInfinite(getKey, fetcher, {
    revalidateAll: false,
    revalidateFirstPage: false,
  });
  const flatData = data.flat(1);
  return (
    <div>
      <div className="App">
        {flatData.map((post: iPost, i: number) => {
          return (
            <div
              key={i}
              style={{
                padding: "3px",
              }}
            >
              <h5>
                {i + 1} - {post.title}
              </h5>
            </div>
          );
        })}
        <button onClick={() => setSize(size + 1)}>Load More</button>
      </div>
    </div>
  );
};

export default SWRInfnite;
