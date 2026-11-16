import { useEffect, useState } from "react";

export default function PageList() {
  const [status, setStatus] = useState("loading");   // "loading", "error", or "success"
  const [Pages, setPages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/pages");

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const result = await res.json();
        setPages(result.data);
        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    }

    load();
  }, []);                                              // [] means: run once, when the component first appears

  if (status === "loading") return <p role="status">Loading…</p>;
  if (status === "error") return <p role="alert">Could not load pages. {error}</p>;

  return (
    <ul>
      {Pages.map(i => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  );
}