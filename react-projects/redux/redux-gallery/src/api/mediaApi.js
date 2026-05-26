import axios from "axios";

const VITE_UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const VITE_PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

const normalizeMediaData = (items, type) => {
  if (!Array.isArray(items) || items.length === 0) {
    return [];
  }

  return items.map((item) => ({
    id: item?.id || item?.video_files?.[0]?.id || item?.url,
    title:
      type === "photo"
        ? item?.alt_description || "Untitled photo"
        : item?.user?.name || "Video",
    type,
    mediaUrl: type === "photo" ? item?.urls?.full : item?.video_files?.[0]?.link,
    url: type === "photo" ? item?.links?.html : item?.url,
  }));
};

export async function getImages(query = "cat", page = 1, limit = 10) {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, page, per_page: limit },
      headers: {
        Authorization: `Client-ID ${VITE_UNSPLASH_API_KEY}`,
      },
    });

    return normalizeMediaData(response.data?.results, "photo");
  } catch (error) {
    console.error("getImages error:", error);
    return [];
  }
}

export async function getVideos(query = "Nature", limit = 10) {
  try {
    const response = await axios.get("https://api.pexels.com/v1/videos/search", {
      params: { query, per_page: limit },
      headers: { Authorization: VITE_PEXELS_API_KEY },
    });

    return normalizeMediaData(response.data?.videos, "video");
  } catch (error) {
    console.error("getVideos error:", error);
    return [];
  }
};
