import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((items) => {
        console.log("items fetched", items);
        return () => {
          controller.abort();
        };
      });
  }, [fetchStatus]);
  return (
    <>
      <div>
        FetchDone: {fetchStatus.fetchDone.toString()}, FetchCompleted:{" "}
        {fetchStatus.fetching.toString()}
      </div>
    </>
  );
};

export default FetchItems;
