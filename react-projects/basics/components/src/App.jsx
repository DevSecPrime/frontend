import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Card />
    </>
  );
}

export default App;
