const ResourceFilters = require('../../models/ResourceFilters') ;

const deleteResourceFilter = async (req , res) => {
    const filterId = req.params.filterId ; 
    try { 
        const deletedFilter = await ResourceFilters.findByIdAndDelete(filterId) ; 
        console.log('deleted!') ;
        res.status(200).json({message: "Filter Deleted!"}) ;
    } catch (error) {
        console.log(error) ; 
        res.status(500).json({message: "some error occured"}) ;
    }
}

module.exports = deleteResourceFilter ; 