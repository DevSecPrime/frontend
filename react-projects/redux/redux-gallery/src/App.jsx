import ResultGrid from "./components/ResultGrid";
import { Searchbar } from "./components/Searchbar";
import Tabs from "./components/Tabs";
const App = () => {
  return (
    <div className="h-screen w-full bg-gray-900 text-white flex flex-col items-center">
      <Searchbar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;
