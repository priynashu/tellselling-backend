const ResourceFilters = require('../../models/ResourceFilters') ;

const getResourceFilters = async (req , res) => {
    const tenantId = req.params.tenantId ; 
    try { 
        const filters = await ResourceFilters.find({tenantId: tenantId}) ;
        res.status(200).json(filters) ;
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "some error occured"}) ;
    }
}
module.exports = getResourceFilters ; 