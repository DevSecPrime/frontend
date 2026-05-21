import axios from "axios";

const VITE_UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

const VITE_PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

console.log({
  VITE_UNSPLASH_API_KEY,
  VITE_PEXELS_API_KEY,
});

/**
 * Get images from API
 */
export async function getImages(query = "cat", page = 1, limit = 10) {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, page, limit },
      headers: {
        Authorization: `Client-ID ${VITE_UNSPLASH_API_KEY}`,
      },
    });

    console.log({ data: res.data?.results });
    return res.data?.results;
  } catch (error) {
    console.log({ error });
  }
}

export const getVideos = async (query = "Nature", limit = 10) => {
  try {
    const res = await axios.get("https://api.pexels.com/v1/videos/search", {
      params: { query, limit },
      headers: { Authorization: VITE_PEXELS_API_KEY },
    });

    console.log({ data: res.data?.videos });
    return res.data?.videos;
  } catch (error) {
    console.log({ error });
  }
};
