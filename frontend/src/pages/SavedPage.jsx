import { useEffect, useState } from "react";
import api from "../../services/service";
import ResourceCard from "../components/ResourceCard";

export default function SavedPage() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    api
      .get("/resources/saved")
      .then((r) => setSaved(r.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Saved Resources</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {saved.map((r) => (
          <ResourceCard key={r._id} resource={r} />
        ))}
      </div>
    </div>
  );
}
