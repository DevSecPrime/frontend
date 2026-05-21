import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages, getVideos } from "../api/mediaApi";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search,
  );

  //Call api function

  const getData = async () => {
    let data = null;
    if (activeTab === "photos") {
      data = await getImages(query);
    } else if (activeTab === "videos") {
      data = await getVideos(query);
    }

    console.log({ data });
  };

  return (
    <div>
      <button onClick={getData}> Click me</button>
    </div>
  );
};

export default ResultGrid;
