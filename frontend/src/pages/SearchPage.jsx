import { useState } from "react";
import api from "../../services/service";
import ResourceCard from "../components/ResourceCard";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState({});

  const runSearch = async () => {
    try {
      const res = await api.get("/resources/search", { params: { q } });
      setResults(res.data);
    } catch (err) {
      console.log("Error encountered while fetching data: ", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Search Resources</h2>
      <div className="flex space-x-2 mb-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search..."
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={runSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <h3 className="text-xl font-medium mt-6 mb-2">Videos</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(results.youtube || []).map((r) => (
          <ResourceCard key={r.externalId} resource={r} />
        ))}
      </div>
      <h3 className="text-xl font-medium mt-6 mb-2">Books</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(results.books || []).map((r) => (
          <ResourceCard key={r.externalId} resource={r} />
        ))}
      </div>
    </div>
  );
}
