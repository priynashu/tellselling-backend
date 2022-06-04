const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

const { uploadFile } = require('../../utils/uploadFile');
const Resources = require('../../models/Resources');

const updateResources = async (req, res) => {
//   const { title, category, tags} = JSON.parse(req.body);
  const title = req.body.title;
  const categories = req.body.categories;
  const tags = req.body.tags;
  const content_areas = req.body.content_areas;
  const internal_uses = req.body.internal_uses;
  const tenantId = req.body.tenantId;
  const resourceId = req.params.resourceId;
  // const createdBy = req.body.creator

  const file = req.body.file;
  // const filePath = `./src/uploads/${fileName}`;

  const thumb = req.body.thumb;
  // const thumbPath = `./src/uploads/${thumbName}`;

  // console.log("Update hitted",req.body,title,categories,tags,content_areas,internal_uses,tenantId);
  console.log("update hitted");
  try {
    // Saving the file locally and uploading to cloudinary and then deleting the file form storage
    // console.log(req.files);
    // await pipeline(req.files.file[0].stream, fs.createWriteStream(filePath));
    // const uploadRes = await uploadFile(filePath);
    // fs.unlinkSync(filePath);

    // await pipeline(req.files.thumb[0].stream, fs.createWriteStream(thumbPath));
    // const uploadThumbRes = await uploadFile(thumbPath);
    // fs.unlinkSync(thumbPath);

    // Creating new Resource
    // const newResource = await Resources.create({
    //   tenantId,
    //   resourceTitle: title,
    //   fileType: req.files.file[0].detectedMimeType,
    //   fileCdnLink: uploadRes.secure_url,
    //   thumbnail: uploadThumbRes.secure_url,
    //   resourceCategory: category,
    //   tags,
    //   createdBy: userId,
    // });

    const editResource = {
        resourceTitle: title,
        fileType: "image",
        fileCdnLink: file,
        thumbnail: thumb,
        categories:categories,
        content_areas:content_areas,
        tags: tags,
        internal_use:internal_uses,

    };

    console.log(resourceId);
    let dataresource = await Resources.findOneAndUpdate({_id: resourceId}, editResource);

    // console.log("updated data is",dataresource);

    return res.status(200).json(dataresource);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = updateResources;
