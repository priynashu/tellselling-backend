const mongoose = require('mongoose');

const digitalSalesRoomSchema = mongoose.Schema(
  {
    tenantId: { type: String, required: true },
    name: {type: String, required:true},
    description: {type: String, required:true},
    tags: { type: [String], default: [] },
    thumbnail: { type: String, require: true },
    video : {type: String, require: true },
    sales_person_name: { type: String, require: true },
    contents: { type: Object }, //stores JSON
    cta: { type: [String], default: [] },// Array of checked options
    prospectus: { type: Object },
    last_modified: { type: String, require: true }, //date stored in string type
    created: { type: String, require: true } // in string
  }
);

const DigitalSalesRoom = mongoose.model('DigitalSalesRoom', digitalSalesRoomSchema);

module.exports = DigitalSalesRoom;