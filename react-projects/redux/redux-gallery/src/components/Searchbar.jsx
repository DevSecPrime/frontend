import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

export const Searchbar = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const trimmedQuery = inputText.trim();

    if (!trimmedQuery) return;

    dispatch(setQuery(trimmedQuery));
    setInputText("");
  };

  return (
    <section className="w-full px-4 py-10">
      <form
        className="mx-auto flex max-w-4xl gap-4 rounded-3xl bg-slate-900 p-6 shadow-xl"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          placeholder="Search for photos or videos"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-6 py-4 text-xl text-white outline-none focus:border-emerald-400"
        />
        <button
          type="submit"
          className="rounded-2xl bg-emerald-500 px-6 py-4 text-xl font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Search
        </button>
      </form>
    </section>
  );
};
