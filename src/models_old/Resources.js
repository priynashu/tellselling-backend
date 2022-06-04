const mongoose = require('mongoose');
//Updated on 13th Jan
const resourcesSchema = mongoose.Schema({
    tenantId: {
        type: String,
        required: true
    },
    resourceTitle: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: false
    },
    fileCdnLink: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        require: true
    },
    resourceCategory: {
        type: String,
        required: false
    },

    tags: {
        type: [
            {}
        ],
        default: []
    },
    categories: {
        type: [
            {}
        ],
        default: []
    },
    content_areas: {
        type: [
            {}
        ],
        default: []
    },
    external_internal: {
        type: [
            {}
        ],
        default: []
    },
    private_public: {
        type: [
            {}
        ],
        default: []
    },
    internal_use: {
        type: [
            {}
        ],
        default: []
    },

    createdBy: {
        type: String,
        required: false
    },
    sharedBy: {
        type: [String],
        default: []
    },
    viewedBy: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
},);

const Resources = mongoose.model('Resources', resourcesSchema);

module.exports = Resources;
