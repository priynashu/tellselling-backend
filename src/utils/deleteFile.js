const { cloudinary } = require('./cloudinaryConfig');

const deleteFile = async (public_id) => {
  let deleteRes = await cloudinary.uploader.destroy(public_id);
  console.log(deleteRes);
};

module.exports = { deleteFile };