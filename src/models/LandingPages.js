const mongoose = require('mongoose');

const landingPageSchema = mongoose.Schema(
    {
        tenantId: { type: String, required: true }, //Tenant ID
        title: { type: String, required: true }, //Titile Of the Website
        link: { type: String, required: true }, //Link Of the Website
        contents: { type: [], required: false }, // JSON in String 
        header_code: { type: String, required: false },
        body_code: { type: String, required: false },
        footer_code: { type: String, required: false },
        cookie_expiry: { type: String, required: false },
        custom_domain: {type: String, required: false}
    },
    {
        timestamps: true,
    },
);

const LandingPages = mongoose.model('LandingPages', landingPageSchema);

module.exports = LandingPages;