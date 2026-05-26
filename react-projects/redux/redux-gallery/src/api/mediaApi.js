import axios from "axios";

const VITE_UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

const VITE_PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;



const normalizeThData = (data, type) => {
  if (Object.keys(data).length === 0) {
    console.error({
      error: "Something went wrong while calling the api : ",
      error,
    });
  }

  return data.map((d) => ({
    id: d?.id,
    title: type === 'photo' ? d?.alt_description : (d?.user?.name || 'video'),
    type,
    thumbnailUrl: type === 'photo' ? d?.urls?.thumb : d?.image,
    mediaUrl: type === 'photo' ? d?.urls?.full : d?.video_files[0].link,
    url: type === 'photo' ? d?.links?.html : d?.url
  }));
};

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

    // console.log({ data: res.data?.results })


    return normalizeThData(res.data?.results, "photo");
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

    // console.log({ data: res.data?.videos });F
    // return res.data?.videos;
    return normalizeThData(res.data?.videos, 'video')
  } catch (error) {
    console.log({ error });
  }
};
