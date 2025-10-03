import Resource from "../models/Resource.js";

const save = async (req, res) => {
  const { externalId, type, title, externalLink, thumbnail, description } =
    req.body;
  let resource = await Resource.findOne({ externalId });
  if (!resource)
    resource = await Resource.create({
      externalId,
      type,
      title,
      externalLink,
      thumbnail,
      description,
    });
  res.json(resource);
};

export default save;
