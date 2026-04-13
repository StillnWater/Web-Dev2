import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333"
      }}

    >
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default App;