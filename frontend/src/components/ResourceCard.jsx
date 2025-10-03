import api from "../services/service.js";

const ResourceCard = ({ resource, onRemove, type }) => {
  const save = async () => {
    await api.post("/resources/save", resource);
    alert("Saved!");
  };

  const mark = async (status) => {
    if (!resource._id) return alert("Save first");
    await api.post(`/resources/${resource._id}/progress`, { status });
    alert("Updated!");
  };

  const remove = async () => {
    if (!resource._id) return alert("Not in saved list");
    await api.delete(`/resources/${resource._id}`);
    alert("Deleted");
    if (onRemove) onRemove(resource._id);
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow p-4 flex flex-col">
      {resource.thumbnail && (
        <img
          src={resource.thumbnail}
          alt="thumbnailImg"
          className={
            type === "video"
              ? "w-full h-70 object-cover rounded mb-2"
              : "w-full h-80 object-contain mb-2"
          }
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
        {onRemove && (
          <button
            onClick={remove}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Remove
          </button>
        )}
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
};

export default ResourceCard;
