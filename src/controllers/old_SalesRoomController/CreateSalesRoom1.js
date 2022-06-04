const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

const { uploadFile } = require('../../utils/uploadFile');

const SalesRoom1 = require('../../models/SalesRoom1');

const createSalesRoom = async (req, res) => {
  const {
    tenantId,
    email,
    firstName,
    lastName,
    org,
    dealName,
    dealAmount,
    salesActions,
    createdBy,
  } = JSON.parse(req.body.data);

  const fileName = req.file.originalName;
  const filePath = `./src/uploads/${fileName}`;

  try {
    // Saving the file locally and uploading to cloudinary and then deleting the file form storage
    // await pipeline(req.file.stream, fs.createWriteStream(filePath));
    // const uploadRes = await uploadFile(filePath);
    // fs.unlinkSync(filePath);

    // Creating new Resource
    const newSalesRoom = await SalesRoom1.create({
      tenantId,
      email,
      firstName,
      lastName,
      org,
      dealName,
      dealAmount,
      fileLink: '',
      fileType: '',
      salesActions,
      createdBy,
    });

    return res.status(200).json(newSalesRoom);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = createSalesRoom;
