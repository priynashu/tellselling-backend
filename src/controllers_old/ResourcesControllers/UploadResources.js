const fs = require('fs');
const { promisify } = require('util');
const Resources = require('../../models/Resources');

const uploadResources = async (req, res) => {

  const requests = req.body;
  console.log("requests",requests);
  try {
    const newResource = await Resources.create({
      tenantId: requests.tenantId,
      resourceTitle: requests.title,
      fileType: 'image',
      fileCdnLink: requests.file,
      thumbnail: requests.thumb,
      resourceCategory: '',
      tags: requests.tags,
      categories: requests.categories,
      content_areas: requests.content_areas,
      external_internal: requests.external_internal,
      private_public:requests.private_public,
      internal_use: requests.internal_uses,
      createdBy: requests.creator,
      sharedBy: [],
      viewedBy: [],
    });
    // console.log(newResource);
    return res.status(200).json(newResource);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: error });
  }
};

module.exports = uploadResources;