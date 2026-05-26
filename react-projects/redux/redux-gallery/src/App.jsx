import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionPage />} />
      </Routes>
    </main>
  );
};

export default App;
