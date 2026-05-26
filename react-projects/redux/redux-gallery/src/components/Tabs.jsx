import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const tabs = ["photos", "videos"];

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 pb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => dispatch(setActiveTab(tab))}
          className={`rounded-3xl px-6 py-3 text-xl font-semibold transition ${
            activeTab === tab
              ? "bg-emerald-500 text-slate-950"
              : "bg-slate-800 text-slate-200 hover:bg-slate-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
