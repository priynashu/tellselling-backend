const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

const { uploadFile } = require('../../utils/uploadFile');
const Resources = require('../../models/Resources');

const uploadResources = async (req, res) => {
  const { title, category, tags } = JSON.parse(req.body.data);
  const tenantId = req.body.tenantId;
  const userId = req.body.userId;

  const fileName = req.files.file[0].originalName;
  const filePath = `./src/uploads/${fileName}`;

  const thumbName = req.files.thumb[0].originalName;
  const thumbPath = `./src/uploads/${thumbName}`;

  try {
    // Saving the file locally and uploading to cloudinary and then deleting the file form storage
    await pipeline(req.files.file[0].stream, fs.createWriteStream(filePath));
    const uploadRes = await uploadFile(filePath);
    fs.unlinkSync(filePath);

    await pipeline(req.files.thumb[0].stream, fs.createWriteStream(thumbPath));
    const uploadThumbRes = await uploadFile(thumbPath);
    fs.unlinkSync(thumbPath);

    // Creating new Resource
    const newResource = await Resources.create({
      tenantId,
      resourceTitle: title,
      fileType: req.files.file[0].detectedMimeType,
      fileCdnLink: uploadRes.secure_url,
      thumbnail: uploadThumbRes.secure_url,
      resourceCategory: category,
      tags,
      createdBy: userId,
    });
    return res.status(200).json(newResource);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = uploadResources;
