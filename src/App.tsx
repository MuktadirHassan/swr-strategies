import { useState } from "react";
import "./App.css";
import SWRInfnite from "./SWRInfnite";
import { SWRLoadAsPage } from "./SWRLoad";

export const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Switch</button>
      {state ? <SWRLoadAsPage /> : <SWRInfnite />}
    </div>
  );
}

export default App;
