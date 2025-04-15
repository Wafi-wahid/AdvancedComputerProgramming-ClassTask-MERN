import { useEffect, useState } from "react";
import axios from "axios"; // ← this line is essential

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/api") // hitting Express via Vite proxy
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return <h1>{data}</h1>;
}

export default App;
