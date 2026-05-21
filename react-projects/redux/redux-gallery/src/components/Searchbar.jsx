import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
export const Searchbar = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("searched input text: ", inputText);
    dispatch(setQuery(inputText));

    setInputText("");
  };

  return (
    <div>
      <form
        className="flex bg-gray-900 gap-5 py-10 px-14"
        onSubmit={(e) => submitHandler(e)}
      >
        <input
          type="text"
          value={inputText}
          placeholder="Search anything..."
          required
          className="w-full border-2 px-6 py-3 text-xl outline-none"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="border-2 px-6 py-3 text-xl outline-none cursor-pointer active:scale-0.95"
        >
          Search
        </button>
      </form>
    </div>
  );
};
