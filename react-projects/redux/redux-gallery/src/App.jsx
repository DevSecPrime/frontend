import { getImages, getVideos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-900 text-white">
      <button
        onClick={async () => await getImages()}
        className="bg-green-400 py-3 px-4 m-5 text-black"
      >
        Get images
      </button>
      <button
        onClick={async () => await getVideos()}
        className="bg-green-400 py-3 px-4 m-5 text-black"
      >
        Get videos
      </button>
    </div>
  );
};

export default App;
