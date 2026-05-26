import ResultGrid from "./components/ResultGrid";
import { Searchbar } from "./components/Searchbar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Redux Media Gallery
          </h1>
          <p className="mt-3 text-lg text-slate-300">
            Search and browse photos or videos using Redux state.
          </p>
        </header>

        <Searchbar />
        <Tabs />
        <ResultGrid />
      </div>
    </main>
  );
};

export default App;
