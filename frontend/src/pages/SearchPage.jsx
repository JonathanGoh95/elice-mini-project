import { useState } from "react";
import api from "../services/service.js";
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
      <div className="flex justify-center">
        <h2 className="text-4xl font-semibold mb-4">Search Resources</h2>
      </div>
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
      <div className="flex justify-center">
        <h3 className="text-3xl font-medium mt-4 mb-4">Videos</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(results.youtube || []).map((r) => (
          <ResourceCard key={r.externalId} resource={r} type="video" />
        ))}
      </div>
      <div className="flex justify-center">
        <h3 className="text-3xl font-medium mt-8 mb-4">Books</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(results.books || []).map((r) => (
          <ResourceCard key={r.externalId} resource={r} type="book" />
        ))}
      </div>
    </div>
  );
}
