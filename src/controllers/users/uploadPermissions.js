const User = require('../../models/user');

const uploadPermissions = async(req,res)=>{

const permissions = req.body
const tenantId=req.params.tenantId
console.log('tenantId',permissions,tenantId);
try{

    let user = await User.findOneAndUpdate({tenantId:tenantId}, {permissions:permissions},{ "returnNewDocument": false });
        return  res.status(200).json(user)
}
catch(err){
    console.log(err);
    return res.status(500).json({ message: 'Something went wrong' });
}

}
module.exports = uploadPermissions;