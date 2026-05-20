import { useState } from "react";

export const Searchbar = () => {
  // const [inputText, setInputText] = useState("");
  return (
    <div>
      <form className="flex bg-gray-900 gap-5 py-10 px-14">
        <input
          type="text"
          placeholder="Search anything..."
          required
          className="w-full border-2 px-6 py-3 text-xl"
        />
        <button>Search</button>
      </form>
    </div>
  );
};
