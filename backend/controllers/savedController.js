import Resource from "../models/Resource.js";

const saved = async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
};

export default saved;
