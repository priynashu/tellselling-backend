const mongoose = require('mongoose');

const formSchema = mongoose.Schema(
    {
        tenantId: { type: String, required: true }, //Tenant ID
        formTitle: { type: String, required: true }, //Titile Of the Form
        content: { type: String, required: true }, // JSON in String 
        thumbnail: { type: String, default:'' }, //Not Required Now 
        date:{type:String, default:''}
    },
    {
        timestamps: true,
    },
);

const Forms = mongoose.model('Forms', formSchema);

module.exports = Forms;