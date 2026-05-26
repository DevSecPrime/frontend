const ResultCard = ({ result }) => {
  const addToCollection = (item) => {
    const oldItems = JSON.parse(localStorage.getItem("collections")) || []; // managed if not collection array exist in local storage
    const newData = [...oldItems, item];
    localStorage.setItem("collections", JSON.stringify(newData));
  };
  return (
    <article className="w-[18vw] h-80 overflow-hidden rounded-2xl bg-slate-950 shadow-lg relative">
      <a
        href={result.url}
        target="_blank"
        rel="noreferrer noopener"
        className="block h-full w-full"
      >
        {result.type === "photo" && (
          <img
            src={result.mediaUrl}
            alt={result.title}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        )}

        {result.type === "video" && (
          <video
            src={result.mediaUrl}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center"
          />
        )}
      </a>

      <div
        id="bottom"
        className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/90 to-transparent px-4 py-3 text-white"
      >
        <h2 className="truncate text-base font-semibold capitalize">
          {result.title}
        </h2>

        <button
          className="rounded-full bg-emerald-400 px-3 py-1 text-sm font-semibold text-slate-950 active:scale-95 cursor-pointer"
          onClick={() => addToCollection(result)}
        >
          Save
        </button>
      </div>
    </article>
  );
};

export default ResultCard;
