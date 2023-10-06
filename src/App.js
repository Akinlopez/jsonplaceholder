import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Memo from "./Memo";

export default function App() {
  const [memos, setMemos] = useState([]);
  const [error, setError] = useState("");

  let baseURl = "https//jsonplaceholder.typicode.com/memos?limit=5";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setMemos(response.data);
      })
      .catch((error) => {
        setError();
      });
  }, []);

  function handleDelete(memoID) {
    const updated = memos.filter((memo) => memo.id !== memoID);
    setMemos(updated);
  }

  return (
    <div className="App">
      {memos.map((memo) => (
        <Memo key={memo.id} memo={memo} onDelete={handleDelete} />
      ))}
    </div>
  );
}
