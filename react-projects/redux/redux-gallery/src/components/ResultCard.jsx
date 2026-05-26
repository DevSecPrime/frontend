const ResultCard = ({ result }) => {
  console.log({ result });
  return (
    <div className="w-[18vw] h-80 bg-white rounded-2xl relative">
      <a target="_blank" href={result.url} className="h-full">
        {result.type === "photo" ? (
          <img
            src={result.mediaUrl}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          ></img>
        ) : (
          ""
        )}

        {result.type === "video" ? (
          <video
            src={result.mediaUrl}
            autoPlay
            muted
            loop
            loading="lazy"
            className="h-full w-full object-cover object-center"
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="w-full px-2 py-10 bottom-0 text-white absolute flex justify-between items-center"
      >
        <h2 className=" w-full px-6 text-xl font-semibold capitalize">
          {result.title}
        </h2>

        <button className="bg-emerald-400 px-3 py-1 text-lg font-semibold text-black scale-0.95 cursor-pointer rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
