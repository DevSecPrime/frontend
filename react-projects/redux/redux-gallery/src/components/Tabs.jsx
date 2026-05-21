import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-5 p-10">
      {tabs?.map((tab, index) => {
        return (
          <button
            key={index}
            className={`${activeTab === tab ? "bg-emerald-900" : "bg-emerald-600"} px-4 py-2 cursor-pointer text-center capitalize text-2xl rounded-2xl active:scale-95`}
            onClick={() => {
              dispatch(setActiveTab(tab));
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
