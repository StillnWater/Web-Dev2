import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;