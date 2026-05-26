import { useDispatch, useSelector } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collections.items);

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all collections?")) {
      dispatch(clearCollection());
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Your Collection
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            {collection.length} item{collection.length !== 1 ? "s" : ""} saved
          </p>
        </div>

        {collection.length > 0 && (
          <button
            onClick={handleClearAll}
            className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Collection Grid */}
      {collection.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-slate-700 px-12 py-20 text-center">
          <h3 className="text-2xl font-semibold text-slate-300">
            No items in your collection
          </h3>
          <p className="mt-2 text-slate-400">
            Start adding photos or videos to build your collection!
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {collection.map((result) => (
            <CollectionCard key={result.id || result.mediaUrl} result={result} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;

