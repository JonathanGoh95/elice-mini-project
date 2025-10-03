import { useEffect, useState } from "react";
import api from "../services/service.js";
import ResourceCard from "../components/ResourceCard";

export default function SavedPage() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    api
      .get("/resources/saved")
      .then((r) => setSaved(r.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleRemove = async (id) => {
    setSaved((prev) => prev.filter((r) => r._id !== id));
  };

  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold mb-4">Saved Resources</h2>
      </div>
      {saved.length !== 0 ? (
        saved.map((r) => (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard key={r._id} resource={r} onRemove={handleRemove} />
          </div>
        ))
      ) : (
        <div className="flex justify-center">
          <h3 className="text-lg">No items saved yet!</h3>
        </div>
      )}
    </div>
  );
}
