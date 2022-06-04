const ResourceFilters = require('../../models/ResourceFilters') ;

const updateResourceFilter = async (req , res) => {
    const { filterId , tenantId } = req.params ; 
    try { 
        const filter = await ResourceFIlters.findByIdAndUpdate(filterId , {
            tenantId: tenantId , 
            name: req.body.name , 
            category: req.body.category , 
            tags: req.body.tags ,
            fileTypes: req.body.fileTypes
        }) ;
        res.status(200).json(filter) ;
    } catch (error) {
        console.log(error) ; 
        res.status(500).json({message: "some error occured!"}) ;
    }
}

module.exports = updateResourceFilter ; 