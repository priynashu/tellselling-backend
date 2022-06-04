const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: "tellselling",
  api_key: "165973283857982",
  api_secret: "5WR5zH2znRl5xDTEN8_tOcMA3O8",
});

module.exports = { cloudinary };
