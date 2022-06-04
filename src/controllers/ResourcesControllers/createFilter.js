const ResourceFilters = require('../../models/ResourceFilters')
const CreateFilters = async (req, res) => {
    // console.log("inside filter controller",req.body);
    const requests = req.body;
    console.log("inside create filters",requests);
        try {
            const filters = await ResourceFilters.create(requests);
            console.log("filters are",filters);
            return res.status(200).json(filters);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    } 
    
    module.exports = CreateFilters; 