import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <h1>Spotify Album</h1>
      <div className="card">
        <a onClick={() => setCount((count) => count + 1)}>Spotify Album</a>
      </div>
    </>
  );
}

export default App;
