const Resources = require('../../models/Resources');
const SalesroomResource = async (req , res) => {
    const requests=req.body;
    const tenantId = requests.tenantId; 
    try { 
        const resources=[];
        const data = await Resources.find({ tenantId });
        data.forEach((resource,i)=>{
            resources.push(resource);
        })
        return res.status(200).json(resources);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "some error occured"});
    }
}
module.exports = SalesroomResource; 