import api from "../../services/service";

export default function ResourceCard({ resource }) {
  const save = async () => {
    await api.post("/resources/save", resource);
    alert("Saved!");
  };

  const mark = async (status) => {
    if (!resource._id) return alert("Save first");
    await api.post(`/resources/${resource._id}/progress`, { status });
    alert("Updated!");
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      {resource.thumbnail && (
        <img
          src={resource.thumbnail}
          alt="thumbnailImg"
          className="w-full h-40 object-cover rounded mb-2"
        />
      )}
      <h4 className="font-semibold text-lg mb-1">{resource.title}</h4>
      <p className="text-sm text-gray-600 flex-1">{resource.description}</p>
      <div className="mt-2 flex space-x-2">
        <button
          onClick={save}
          className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
        >
          Save
        </button>
        <button
          onClick={() => mark("in_progress")}
          className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
        >
          Start
        </button>
        <button
          onClick={() => mark("completed")}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
        >
          Complete
        </button>
        <a
          href={resource.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm self-center"
        >
          Open
        </a>
      </div>
    </div>
  );
}
