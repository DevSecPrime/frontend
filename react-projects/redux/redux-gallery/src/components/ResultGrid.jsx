import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages, getVideos } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, error, loading, results } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if (!query?.trim()) return;

    const fetchData = async () => {
      const fetcher = activeTab === "videos" ? getVideos : getImages;

      try {
        dispatch(setLoading());
        const data = await fetcher(query);
        console.log("apiData", data);
        dispatch(setResults(data));
      } catch (error) {
        console.error(error);
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [query, activeTab]);

  if (error) return <h1>Opps! There is an error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-wrap justify-center gap-2 px-2 py-6 overflow-auto">
      {results.map((result, idx) => (
        <div key={idx}>
          <ResultCard result={result} />
        </div>
      ))}
    </div>
  );
};

export default ResultGrid;
