const ResourceFilters = require('../../models/ResourceFilters') ;

const uploadResourceFilters = async (req , res) => {
    const tenantId = req.params.tenantId ; 
    try { 
        const newFilter = await ResourceFilters.create({
            tenantId: tenantId , 
            name: req.body.name , 
            category: req.body.category , 
            tags: req.body.tags ,
            fileTypes: req.body.fileType
        }) ;
        res.status(200).json(newFilter) ;
    } catch (error) {
        console.log(error) ;
        res.status(500).json({message: "some error occured"}) ;
    }
}

module.exports = uploadResourceFilters ;