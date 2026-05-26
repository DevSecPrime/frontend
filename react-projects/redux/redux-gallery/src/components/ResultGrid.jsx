import { useEffect } from "react";
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

      dispatch(setLoading());
      const data = await fetcher(query);

      if (data.length === 0) {
        dispatch(setError("No results found."));
        return;
      }

      dispatch(setResults(data));
    };

    fetchData().catch((fetchError) => {
      console.error(fetchError);
      dispatch(setError(fetchError.message || "Unexpected error."));
    });
  }, [query, activeTab, dispatch]);

  if (error) {
    return (
      <div className="px-6 py-10 text-center text-red-400">
        <h1 className="text-2xl font-semibold">Oops! Something went wrong.</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="px-6 py-10 text-center text-white">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if (!results.length) {
    return (
      <div className="px-6 py-10 text-center text-slate-300">
        <p className="text-xl">Search for photos or videos above.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-6 overflow-auto">
      {results.map((result) => (
        <ResultCard key={result.id || result.mediaUrl} result={result} />
      ))}
    </div>
  );
};

export default ResultGrid;
