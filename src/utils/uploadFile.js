const { cloudinary } = require('./cloudinaryConfig');

const uploadFile = async (file) => {
  const uploadRes = await cloudinary.uploader.upload(file);
  return uploadRes ;
};

module.exports = { uploadFile };
