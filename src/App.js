import { useEffect, useState } from "react";
import Canvas from "./components/Canvas";

function App() {
  const [start, setStart] = useState(false);
  const [choices, setChoices] = useState("");

  return (
    <div className="flex flex-col w-full h-dvh overflow-hidden">
      <header className="flex items-center px-4 py-4 w-full h-14 text-grey-200 bg-grey-900">
        Randomizer
      </header>
      <section className="flex flex-col md:flex-row justify-between w-full h-full">
        <div className="w-full h-3/5 lg:w-3/4 md:h-full grid place-items-center">
          <Canvas start={start} setStart={setStart} choices={choices} />
        </div>
        <aside className="w-full md:w-2/3 h-2/5 lg:w-1/4 md:h-full border-l border-t border-grey-300 px-6 py-4">
          <h1 className="mb-4">Add Choices</h1>
          <textarea
            className="w-full mx-auto h-fit outline-none border border-grey-300 rounded p-2 resize-none"
            rows={10}
            value={choices}
            onChange={(e) => !start && setChoices(e.target.value)}
          />
        </aside>
      </section>
    </div>
  );
}

export default App;
