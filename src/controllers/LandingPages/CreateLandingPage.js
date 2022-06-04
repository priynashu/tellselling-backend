const LandingPage = require('../../models/LandingPages');

const CreateLandingPage = async (req, res) => {
    try {
        const timestamp = new Date;

        const form = await LandingPage.create({
            tenantId: req.body.tenantId, //String
            title: req.body.title, //Titile Of the Website
            link: req.body.link, //Link Of the Website
            contents: req.body.contents, // JSON in String 
            header_code: req.body.header_code,
            body_code: req.body.body_code,
            footer_code: req.body.footer_code,
            cookie_expiry: req.body.cookie_expiry,
            custom_domain: req.body.custom_domain
        })
        
        console.log('Saved to Database!');
        return res.status(200).json(form);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = CreateLandingPage; 