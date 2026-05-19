import React, { useState } from "react";

export const Searchbar = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <form>
        <input type="text" placeholder="Search anything..." />
        <button>Search</button>
      </form>
    </div>
  );
};
