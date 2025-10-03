import Resource from "../models/Resource.js";

const update = async (req, res) => {
  const { status } = req.body;
  const resource = await Resource.findById(req.params.id);
  if (!resource) return res.status(404).json({});
  resource.progress = status;
  await resource.save();
  res.json(resource);
};

export default update;
