const ResultCard = ({ result }) => {
  return (
    <div className="w-[18vw] h-80 bg-white rounded-2xl relative">
      <div className="h-full">
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
      </div>
      <div
        id="bottom"
        className="w-full px-6 py-10 bottom-0 text-white absolute"
      >
        <h2 className=" w-full px-6 py-10 text-xl font-semibold capitalize">
          {result.title}
        </h2>
      </div>
    </div>
  );
};

export default ResultCard;
